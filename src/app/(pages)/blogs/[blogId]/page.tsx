import React from "react";
import { notFound } from "next/navigation";
import { getBlogById } from "../../../../../actions/blogs.actions";
import BlogContent from "@/components/BlogContent";
import BlogDecorations from "@/components/BlogDecorations";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jetbrains_mono } from "@/lib/fonts";
import { twMerge } from "tailwind-merge";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  const blog = await getBlogById(blogId);

  if (!blog || !blog.content) {
    notFound();
  }

  return (
    <div className="dark:bg-zinc-900 bg-green-50 min-h-screen w-full relative overflow-hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]">
      <BlogDecorations />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link href="/blogs">
          <Button
            className={twMerge(
              "flex items-center gap-2 mb-8 px-6 py-3 border-3 border-black dark:border-white",
              "bg-white dark:bg-zinc-800 text-black dark:text-white font-bold",
              "shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]",
              "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]",
              "hover:translate-x-1 hover:translate-y-1 transition-all"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Button>
        </Link>

        {/* Blog Header */}
        <article className="border-4 border-black dark:border-white bg-white dark:bg-zinc-800 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] p-6 md:p-8">
          {/* Title */}
          <h1
            className={twMerge(
              `${jetbrains_mono.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4`,
              "text-black dark:text-white"
            )}
          >
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b-4 border-black dark:border-white">
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
              {blog.date}
            </span>
            {blog.series && (
              <span className="px-3 py-1 border-2 border-black dark:border-white bg-emerald-100 dark:bg-yellow-200 text-black text-sm font-bold">
                {blog.series}
              </span>
            )}
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 border-2 border-black dark:border-white bg-emerald-100 dark:bg-yellow-200 text-black text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Blog Content */}
          <BlogContent content={blog.content} />
        </article>
      </div>
    </div>
  );
}
