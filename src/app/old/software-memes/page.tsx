"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { jetbrains_mono, silkscreen, space_mono } from "@/lib/fonts";
import { useTheme } from "next-themes";
import Circle from "@/components/ui/shapes/Circle";
import Triangle from "@/components/ui/shapes/Triangle";
import Curly from "@/components/ui/shapes/Curly";
import Square from "@/components/ui/shapes/Square";
import { MEMES } from "@/lib/constants";
import type { TMemeCategory } from "@/lib/types";
import {
  ITEM_VARIANTS,
  CONTAINER_VARIANTS,
  FILTER_BUTTON_VARIANTS,
  EMOJI_VARIANTS,
} from "@/lib/variants";
import { CATEGORY_EMOJIS } from "@/lib/constants";

const MemesPage = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<
    TMemeCategory | "all"
  >("all");

  const filteredMemes =
    selectedCategory === "all"
      ? MEMES
      : MEMES.filter((meme) => meme.category === selectedCategory);

  const categories: Array<TMemeCategory | "all"> = [
    "all",
    ...Array.from(new Set(MEMES.map((meme) => meme.category))),
  ] as Array<TMemeCategory | "all">;

  return (
    <div className="min-h-screen w-full py-16 relative bg-gradient-to-br from-emerald-100 to-green-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-500">
      {/* Background pattern - zigzag lines instead of diagonal */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${
            theme === "light" ? "#10b981" : "#d97706"
          } 0, ${
            theme === "light" ? "#10b981" : "#d97706"
          } 1px, transparent 1px, transparent 12px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative elements - positioned differently from Projects page */}
      <Circle
        size={100}
        color={theme === "light" ? "#059669" : "#f59e0b"}
        className="absolute top-36 right-20 md:block hidden"
      />
      <Triangle
        size={70}
        color={theme === "light" ? "#10b981" : "#eab308"}
        className="absolute bottom-20 left-16 md:block hidden"
        rotation={15}
      />
      <Square
        size={50}
        color={theme === "light" ? "#047857" : "#10b981"}
        className="absolute top-40 left-20 md:block hidden"
      />
      <Curly
        className="absolute bottom-40 right-12 md:block hidden"
        width={100}
        height={40}
        color={theme === "light" ? "#065f46" : "#f59e0b"}
      />
      <Curly
        className="absolute top-20 left-1/3 md:block hidden"
        width={60}
        height={25}
        color={theme === "light" ? "#10b981" : "#f59e0b"}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="w-full flex flex-col items-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative"
            initial={{ rotate: 0 }}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <h1
              className={`${space_mono.className} text-2xl sm:text-3xl md:text-4xl border-8 border-black dark:border-gray-200 py-4 px-6 sm:px-8 bg-emerald-400 dark:bg-yellow-500 shadow-[12px_12px_0px_0px_rgba(0,0,0)] dark:shadow-[12px_12px_0px_0px_rgba(229,231,235,0.8)] transition-all duration-300`}
            >
              My Favorite Software Memes
            </h1>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 dark:bg-gray-700 border-4 border-black dark:border-gray-200 z-10 rotate-12 transition-colors duration-300"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 dark:bg-gray-600 border-4 border-black dark:border-gray-200 z-10 rotate-45 transition-colors duration-300"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={`${jetbrains_mono.className} mt-6 text-center max-w-xl text-emerald-900 dark:text-gray-300`}
          >
            A collection of my favorite coding humor! 😂 Click on a category to
            filter.
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variants={FILTER_BUTTON_VARIANTS}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className={`${
                jetbrains_mono.className
              } relative px-5 py-2 border-4 border-black dark:border-gray-200 shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(229,231,235,0.8)] transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-emerald-500 dark:bg-yellow-600 text-white dark:text-gray-900"
                  : "bg-emerald-200 dark:bg-yellow-500/60 text-emerald-900 dark:text-gray-900"
              }`}
            >
              {category === "all"
                ? "All 🌟"
                : `${category.charAt(0).toUpperCase() + category.slice(1)} ${
                    CATEGORY_EMOJIS[category as TMemeCategory]
                  }`}

              {selectedCategory === category && (
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-400 dark:bg-gray-200 border-2 border-black dark:border-gray-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Memes grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
          key={selectedCategory} // Rerun animation when category changes
        >
          {filteredMemes.map((meme, index) => (
            <motion.div
              key={meme.alt}
              variants={ITEM_VARIANTS}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative border-8 border-black dark:border-gray-200 bg-white dark:bg-gray-800 p-3   
               transform hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] 
                      hover:translate-x-1 hover:translate-y-1  overflow-hidden transition-all duration-300"
            >
              {/* Meme image */}
              <div className="relative aspect-square mb-3 overflow-hidden ">
                <Image
                  src={meme.meme}
                  alt={meme.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Meme title and credits */}
              <h3
                className={`${silkscreen.className} text-lg text-emerald-800 dark:text-yellow-400 mb-1`}
              >
                {meme.alt
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h3>

              <p
                className={`${jetbrains_mono.className} text-xs text-emerald-600 dark:text-gray-400`}
              >
                Credits: {meme.credits}
              </p>

              {/* Decorative corner */}
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald-400 dark:bg-yellow-500 border-4 border-black dark:border-gray-200 transform rotate-45"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state message if no memes match the filter */}
        {filteredMemes.length === 0 && (
          <motion.div
            className="flex flex-col items-center justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`${silkscreen.className} text-2xl text-emerald-700 dark:text-yellow-500 text-center`}
            >
              No memes found 😢
            </div>
            <motion.button
              onClick={() => setSelectedCategory("all")}
              className={`${jetbrains_mono.className} mt-4 px-5 py-2 border-4 border-black dark:border-gray-200 bg-emerald-400 dark:bg-yellow-500 shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(229,231,235,0.8)]`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show all memes
            </motion.button>
          </motion.div>
        )}

        <p
          className={`${space_mono.className}  text-center mt-10 text-lg sm:text-xl text-black dark:text-zinc-300`}
        >
          Memes collected with ❤️ && 😹
        </p>
      </div>
    </div>
  );
};

export default MemesPage;
