import matter from "gray-matter";
import { IBlog } from "./types";

const GITHUB_CONFIG = {
  username: process.env.GITHUB_USERNAME || "Harshal292004", 
  repo: process.env.GITHUB_REPO || "personal-website",
  branch: process.env.GITHUB_BRANCH || "blogs", 
  path: process.env.GITHUB_BLOGS_PATH || "blogs", 
};

const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com";

interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  download_url: string;
}

/**
 * Fetches the list of markdown files from the GitHub repository
 */
export async function fetchBlogList(): Promise<IBlog[]> {
  try {
    const url = `${GITHUB_API_BASE}/repos/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.path}?ref=${GITHUB_CONFIG.branch}`;
    
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const files: GitHubFile[] = await response.json();
    
    console.log(`files: ${JSON.stringify(files)}`);
    // Filter for markdown files only
    const markdownFiles = files.filter(
      (file) => file.type === "file" && file.name.endsWith(".md")
    );

    console.log(`markdownFiles: ${JSON.stringify(markdownFiles)}`);

    // Fetch and parse each blog file's frontmatter
    const blogs = await Promise.all(
      markdownFiles.map(async (file) => {
        try {
          const contentUrl = `${GITHUB_RAW_BASE}/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${file.path}`;
          const contentResponse = await fetch(contentUrl, {
            next: { revalidate: 3600 },
          });
          
          if (!contentResponse.ok) {
            throw new Error(`Failed to fetch ${file.name}`);
          }

          const rawContent = await contentResponse.text();
          const { data: frontmatter, content } = matter(rawContent);

          // Generate slug from filename (without .md extension)
          const slug = file.name.replace(/\.md$/, "");

          return {
            id: slug,
            slug,
            title: frontmatter.title || slug,
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            tags: Array.isArray(frontmatter.tags)
              ? frontmatter.tags
              : frontmatter.tags
              ? [frontmatter.tags]
              : [],
            series: frontmatter.series || "",
            summary: frontmatter.summary || content.slice(0, 150) + "...",
          } as IBlog;
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error);
          return null;
        }
      })
    );
    console.log(`blogs: ${JSON.stringify(blogs)}`);
    return blogs
      .filter((blog): blog is IBlog => blog !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching blog list from GitHub:", error);
    throw error;
  }
}

/**
 * Fetches a single blog post's full content by slug
 */
export async function fetchBlogContent(slug: string): Promise<IBlog | null> {
  try {
    const filename = `${slug}.md`;
    const contentUrl = `${GITHUB_RAW_BASE}/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${GITHUB_CONFIG.path}/${filename}`;
    
    const response = await fetch(contentUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const rawContent = await response.text();
    const { data: frontmatter, content } = matter(rawContent);

    // Process image URLs in content
    const processedContent = processImageUrls(content);

    return {
      id: slug,
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || new Date().toISOString().split("T")[0],
      tags: Array.isArray(frontmatter.tags)
        ? frontmatter.tags
        : frontmatter.tags
        ? [frontmatter.tags]
        : [],
      series: frontmatter.series || "",
      summary: frontmatter.summary || content.slice(0, 150) + "...",
      content: processedContent, // Full markdown content with processed image URLs
    } as IBlog;
  } catch (error) {
    console.error(`Error fetching blog content for ${slug}:`, error);
    return null;
  }
}

/**
 * Processes image URLs in markdown content to use GitHub raw URLs
 * This ensures images referenced in markdown are loaded from the GitHub repo
 * 
 * Supports:
 * - Absolute URLs: https://example.com/image.png (unchanged)
 * - Absolute repo paths: /images/image.png -> blogs/images/image.png
 * - Relative paths: ./images/image.png or images/image.png -> blogs/images/image.png
 */
export function processImageUrls(content: string, ): string {
  // Replace relative image paths with GitHub raw URLs
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  
  return content.replace(imageRegex, (match, alt, url) => {
    // If it's already an absolute URL, leave it as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return match;
    }
    
    // Handle different path scenarios
    let imagePath: string;
    if (url.startsWith("/")) {
      // Absolute path from repo root (remove leading slash)
      imagePath = url.slice(1);
    } else {
      // Relative path - resolve relative to the blogs folder
      // Remove leading ./ if present, then prepend the blogs path
      const cleanUrl = url.startsWith("./") ? url.slice(2) : url;
      imagePath = `${GITHUB_CONFIG.path}/${cleanUrl}`;
    }
    
    const imageUrl = `${GITHUB_RAW_BASE}/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${imagePath}`;
    
    return `![${alt}](${imageUrl})`;
  });
}

