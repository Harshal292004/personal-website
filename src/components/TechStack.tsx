"use client";
import React from "react";
import TechSection from "./ui/TechStack/TechSection";
import { motion } from "framer-motion";
import { silkscreen } from "@/lib/fonts";
import Star from "./ui/shapes/Star";
import { LANGUAGES, FRAMEWORKS, DATABASES, TOOLS } from "@/lib/constants";
import { useTheme } from "next-themes";

const TechStack = ({ id }: { id: string }) => {
  const { theme } = useTheme();

  return (
    <div
      id={id}
      className="w-full py-12 md:py-16 bg-green-50 dark:bg-zinc-900 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:70px_70px] relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative elements with responsive positioning */}
      <Star
        className="absolute top-8 right-8 md:top-12 md:right-12"
        color={theme === "light" ? "#43A047" : "#f1c40f"}
        size={30}
      />
      <Star
        className="absolute bottom-24 md:bottom-32 left-8 md:left-16"
        color={theme === "light" ? "#FF9800" : "#f39c12"}
        size={25}
      />
      <Star
        className="absolute top-1/3 left-12 md:left-24"
        color={theme === "light" ? "#2196F3" : "#e74c3c"}
        size={20}
      />

      {/* Mobile-only stars */}
      <Star
        className="absolute top-2/3 right-6 md:hidden"
        color={theme === "light" ? "#9C27B0" : "#f39c12"}
        size={15}
      />

      {/* Large screen only stars */}
      <Star
        className="hidden md:block absolute top-1/2 right-36"
        color={theme === "light" ? "#E91E63" : "#f1c40f"}
        size={40}
      />

      {/* Title with responsive styling */}
      <motion.div
        className="w-full text-center mb-8 md:mb-16 relative px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={`${silkscreen.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block border-8 border-black dark:border-zinc-200 p-3 md:p-4 bg-emerald-200 dark:bg-yellow-600 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] transform rotate-1 transition-colors duration-300`}
          whileHover={{ rotate: -1, transition: { duration: 0.3 } }}
        >
          TECH STACK
        </motion.h1>
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-400 dark:bg-yellow-500 border-4 border-black dark:border-zinc-200 z-10 rotate-12 hidden sm:block"
          whileHover={{ rotate: 24, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-600 dark:bg-zinc-700 border-4 border-black dark:border-zinc-200 z-10 rotate-45 hidden sm:block"
          whileHover={{ rotate: 90, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>

      {/* Tech sections with alternating layouts */}
      <div className="container mx-auto px-4 md:px-6">
        <TechSection
          title="Languages"
          items={LANGUAGES}
          isRightAligned={false}
        />
        <TechSection
          title="Frameworks"
          items={FRAMEWORKS}
          isRightAligned={true}
        />
        <TechSection title="Tools" items={TOOLS} isRightAligned={false} />
        <TechSection
          title="Databases"
          items={DATABASES}
          isRightAligned={true}
        />
      </div>
    </div>
  );
};

export default TechStack;
