"use client";
import React, { useState } from "react";
import useGetBlogs from "@/lib/hooks/useGetBlogs";
import { lora, space_mono } from "@/lib/fonts";
import Link from "next/link";
import { Navbar } from "@/components/NewComponents/Navbar";
import { motion } from "framer-motion";
import { Search, Calendar, ChevronRight, X } from "lucide-react";

export default function BlogsPage() {
  const { blogs, isLoading } = useGetBlogs();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = useState("");

  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));
  const allSeries = Array.from(
    new Set(blogs.map((blog) => blog.series).filter(Boolean)),
  );

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => blog.tags.includes(tag));
    const matchesSeries =
      selectedSeries === "" || blog.series === selectedSeries;
    return matchesSearch && matchesTags && matchesSeries;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedSeries("");
  };

  return (
    <div className="min-h-screen bg-[#f9f5ee] dark:bg-[#161819] text-zinc-800 dark:text-zinc-200 transition-colors duration-500 selection:bg-[#ebd9c8] dark:selection:bg-zinc-800 relative pb-24">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-16">
        {/* Page Title */}
        <div className="mb-12">
          <h1
            className={`${lora.className} text-4xl font-normal text-zinc-900 dark:text-zinc-50 mb-3`}
          >
            Blogs
          </h1>
          <p className={`${lora.className} text-zinc-500 italic`}>
            A curated logs of thoughts, write-ups, and architectural deep-dives.
          </p>
        </div>

        {/* Understated Filters and Search */}
        <div className="mb-12 p-6 rounded-2xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee]/40 dark:bg-zinc-900/20 space-y-6">
          {/* Search Box */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-3.5 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${lora.className} w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 outline-none focus:border-[#d97706] text-sm text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 transition-all`}
            />
            {(searchQuery || selectedTags.length > 0 || selectedSeries) && (
              <button
                onClick={clearFilters}
                className="absolute right-3 top-3 text-xs text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 flex items-center gap-0.5"
              >
                <X size={12} />
                <span>clear</span>
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="space-y-2">
            <span
              className={`${space_mono.className} text-[9px] uppercase tracking-wider text-zinc-400 mb-2 inline-block`}
            >
              Filter by Tag
            </span>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`${space_mono.className} text-[10px] px-2.5 py-1 rounded-md border ${
                      isSelected
                        ? "bg-[#d97706] text-white border-[#d97706]"
                        : "bg-[#f9f5ee] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-[#ebd9c8] dark:border-zinc-800 hover:border-zinc-400"
                    } transition-all cursor-pointer`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Series Filter */}
          {allSeries.length > 0 && (
            <div className="flex items-center gap-3">
              <span
                className={`${space_mono.className} text-[9px] uppercase tracking-wider text-zinc-400`}
              >
                Series:
              </span>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className={`${space_mono.className} text-[10px] bg-[#f9f5ee] dark:bg-zinc-900 border border-[#ebd9c8] dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded px-2 py-1 outline-none`}
              >
                <option value="">All Series</option>
                {allSeries.map((series) => (
                  <option key={series} value={series}>
                    {series}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Blogs List */}
        {isLoading ? (
          <div className="py-24 flex justify-center items-center">
            <span className="animate-spin-slow w-6 h-6 border-2 border-[#d97706] border-t-transparent rounded-full" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className={`${lora.className} text-lg text-zinc-400 italic`}>
              No matching pages found in the journal.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative pb-8 border-b border-[#ebd9c8]/60 dark:border-zinc-800/60"
              >
                <div className="flex items-center gap-3 mb-2 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>
                  {blog.series && (
                    <>
                      <span>•</span>
                      <span className="text-[#d97706]/80">{blog.series}</span>
                    </>
                  )}
                </div>

                <Link href={`/blogs/${blog.id}`} className="block group">
                  <h2
                    className={`${lora.className} text-2xl font-normal text-zinc-900 dark:text-zinc-50 group-hover:text-[#d97706] transition-colors duration-300 mb-3`}
                  >
                    {blog.title}
                  </h2>
                </Link>

                <p
                  className={`${lora.className} text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4`}
                >
                  {blog.summary}
                </p>

                <div className="flex items-center justify-between gap-4">
                  {/* Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${space_mono.className} text-[9px] text-zinc-500 border border-[#ebd9c8] dark:border-zinc-800 px-2 py-0.5 rounded bg-[#f9f5ee]/50 dark:bg-zinc-900/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Link */}
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="flex items-center gap-1 text-xs font-semibold text-[#d97706] hover:text-[#b45309] transition-colors"
                  >
                    <span>Read post</span>
                    <ChevronRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
