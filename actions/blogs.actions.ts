import { fetchBlogList, fetchBlogContent } from "@/lib/github";
import { IBlog } from "@/lib/types";

export async function getBlogs() {
  try {
    const blogs = await fetchBlogList();
    return { blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Return empty array on error instead of crashing
    return { blogs: [] };
  }
}

export async function getBlogById(id: string): Promise<IBlog | null> {
  try {
    const blog = await fetchBlogContent(id);
    return blog;
  } catch (error) {
    console.error(`Error fetching blog ${id}:`, error);
    return null;
  }
}
  