import React from "react";
import { notFound } from "next/navigation";
import { getBlogById } from "../../../../actions/blogs.actions";
import NewBlogContent from "@/components/NewComponents/NewBlogContent";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { lora, space_mono, caveat } from "@/lib/fonts";

interface BlogPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogId = (await params).blogId;
  const blog = await getBlogById(blogId);

  if (!blog || !blog.content) {
    notFound();
  }

  // Calculate estimated reading time
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 225));

  return (
    <div className="min-h-screen bg-[#f9f5ee] dark:bg-[#161819] text-zinc-800 dark:text-zinc-200 transition-colors duration-500 selection:bg-[#ebd9c8] dark:selection:bg-zinc-800 relative pb-24">
      <main className="max-w-2xl mx-auto px-6 pt-16">
        {/* Back navigation */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={12}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to Readings</span>
        </Link>

        <article>
          {/* Header metadata */}
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-zinc-400 dark:text-zinc-500">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{readingTime} min read</span>
            </div>
            {blog.series && (
              <>
                <span>•</span>
                <span className="text-[#d97706]/85 font-semibold">
                  {blog.series}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1
            className={`${lora.className} text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-zinc-900 dark:text-zinc-50 mb-6`}
          >
            {blog.title}
          </h1>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-[#ebd9c8] dark:border-zinc-800">
            {blog.tags.map((tag: string) => (
              <span
                key={tag}
                className={`${space_mono.className} text-[9px] text-zinc-500 border border-[#ebd9c8] dark:border-zinc-800 px-2 py-0.5 rounded bg-[#f9f5ee]/50 dark:bg-zinc-900/30`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Markdown Content */}
          <NewBlogContent content={blog.content} />
        </article>

        {/* Post footer notebook drawing */}
        <div className="mt-16 pt-8 border-t border-[#ebd9c8] dark:border-zinc-800 text-center select-none">
          <span
            className={`${caveat.className} text-2xl text-zinc-400 dark:text-zinc-600`}
          >
            End of blog • Thank you for reading.
          </span>
        </div>
      </main>
    </div>
  );
}
