"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { jetbrains_mono, fira_code , space_mono} from "@/lib/fonts";
import { useTheme } from "next-themes";
import { ITEM_VARIANTS } from "@/lib/variants";
import { twMerge } from "tailwind-merge";
import Star from "@/components/ui/shapes/Star";
import Circle from "@/components/ui/shapes/Circle";
import Triangle from "@/components/ui/shapes/Triangle";
import { Button } from "@/components/ui/button";
import useGetBlogs from "@/lib/hooks/useGetBlogs";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
const page = () => {
  const { theme } = useTheme();
  const { blogs, isLoading } = useGetBlogs();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateFilter, setDateFilter] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [loadingBlogId, setLoadingBlogId] = useState<string | null>(null);

  // flat map helps to flatten the array of arrays into a single array
  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));
  const allSeries = Array.from(new Set(blogs.map((blog) => blog.series)));
  // filter helps to filter the blogs based on the search query, tags, date and series
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => blog.tags.includes(tag));
    const matchesDate = dateFilter === "" || blog.date === dateFilter;
    const matchesSeries =
      selectedSeries === "" || blog.series === selectedSeries;
    return matchesSearch && matchesTags && matchesDate && matchesSeries;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? 
      prev.filter((t) => t !== tag) : // if the tag is already selected, filter out the tag
      [...prev, tag] // if the tag is not selected, add it
    );
  };

  return (
    <div className="dark:bg-zinc-900 bg-green-50 min-h-screen w-full relative overflow-hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]">
        <Star
          className="absolute top-12 right-16 animate-pulse"
          color={theme === "dark" ? "#FFD54F" : "#43A047"}
          size={40}
        />
        <Star
          className="absolute top-20 left-12 animate-pulse"
          color={theme === "dark" ? "#FFECB3" : "#2E7D32"}
          size={25}
        />
        <Circle
          className="absolute top-32 right-1/4 animate-pulse"
          color={theme === "dark" ? "#E0E0E0" : "#FFA726"}
          size={20}
        />
        <Triangle
          className="absolute top-16 right-1/3 animate-pulse"
          color={theme === "dark" ? "#F9A825" : "#FF5722"}
          size={18}
        />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <motion.h2
          variants={ITEM_VARIANTS}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          className={twMerge(
            `${jetbrains_mono.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8 mx-auto max-w-fit`,
            `border-4 border-black dark:border-white shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.5)] p-5 
              bg-emerald-500 dark:bg-yellow-500 text-emerald-950 dark:text-zinc-900 
              hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] 
              transform hover:translate-x-1 hover:translate-y-1 transition-all`
          )}
        >
          Welcome to my blogs ✍🏼
        </motion.h2>

        <div className="mt-12 mb-8 border-4 border-black dark:border-white p-6 bg-white dark:bg-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-3 border-3 border-black dark:border-white bg-green-50 dark:bg-zinc-700 text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-emerald-500 dark:focus:ring-yellow-500"
            />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-3 border-3 border-black dark:border-white bg-green-50 dark:bg-zinc-700 text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-emerald-500 dark:focus:ring-yellow-500"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={twMerge(
                  "px-3 py-1 border-2 border-black dark:border-white font-bold text-sm transition-all",
                  selectedTags.includes(tag)
                    ? "bg-emerald-500 dark:bg-yellow-500 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]"
                    : "bg-white dark:bg-zinc-700 text-black dark:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]"
                )}
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className="mt-4 flex flex-col md:flex-row  md:items-center gap-4">

            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className=" px-4 py-3 border-3 border-black dark:border-white bg-green-50 dark:bg-zinc-700 text-black dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-emerald-500 dark:focus:ring-yellow-500"
            >
              <option value="">All Series</option>
              {allSeries.map((series) => (
                <option key={series} value={series}>
                  {series}
                </option>
              ))}
            </select>
            <Button
              className="flex items-center justify-center gap-3 px-8 py-5 border-3 border-black dark:border-white 
  bg-emerald-500 dark:bg-yellow-500 text-black text-lg font-black
  shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]
  hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]
  hover:translate-x-1 hover:translate-y-1 transition-all"
              onClick={() => {
                setDateFilter("");
                setSearchQuery("");
                setSelectedTags([]);
                setSelectedSeries("");
              }}
            >
              <X className="w-5 h-5" />
              <span>Clear Filters</span>
            </Button>
          </div>
        </div>

        <div className="h-1 bg-black dark:bg-white mb-12" />
        <div className="space-y-8">
          {isLoading ? (
            <div className="py-12 flex justify-center items-center">
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 border-6 md:border-8 border-orange-400 dark:border-yellow-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : (
            filteredBlogs.length === 0 ?
              <motion.h2
                variants={ITEM_VARIANTS}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                className={twMerge(
                  `${fira_code.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8 mx-auto max-w-fit`,
                  ` p-5 
                  text-emerald-950 dark:text-white 
                  transform hover:translate-x-1 hover:translate-y-1 transition-all`
                )}
              >
                No blog found , Sorry !!!
              </motion.h2>
              :
              filteredBlogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-4 border-black dark:border-white p-6 bg-white dark:bg-zinc-800 shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white">
                      {blog.title}
                    </h3>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      {blog.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border-2 border-black dark:border-white bg-emerald-100 dark:bg-yellow-200 text-black text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200 mb-4">
                    {blog.summary}
                  </p>
                  <Link 
                    href={`/blogs/${blog.id}`}
                    onClick={() => setLoadingBlogId(blog.id)}
                  >
                    <Button
                      disabled={loadingBlogId === blog.id}
                      className="flex items-center gap-3 px-8 py-4 border-3 border-black dark:border-white 
    bg-emerald-500 dark:bg-yellow-500 text-black text-lg font-black
    shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]
    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]
    hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-75 disabled:cursor-wait"
                    >
                      {loadingBlogId === blog.id ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-3 border-black dark:border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>View More</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </Link>
                </motion.article>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;