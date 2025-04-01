"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { jetbrains_mono, silkscreen } from "@/lib/fonts"

import { PROJECTS_CONTAINER_VARIANTS, PROJECT_BUTTON_VARIANTS } from "@/lib/variants";

import { useTheme } from "next-themes";

import ProjectCard from "./ui/Projects/ProjectCard";
import Circle from "./ui/shapes/Circle";
import Triangle from "./ui/shapes/Triangle";
import Square from "./ui/shapes/Square";
import Curly from "./ui/shapes/Curly";
import { PROJECTS } from "@/lib/constants";

const Projects = ({ id }: { id: string }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full py-24 relative bg-gradient-to-br from-fuchsia-50 to-violet-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      {/* Background pattern - diagonal lines instead of grid */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 1px, transparent 10px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative elements */}
      <Circle 
        size={80} 
        color={theme === "light" ? "#f472b6" : "#f59e0b"} 
        className="absolute top-20 right-16 md:block hidden" 
      />
      <Triangle
        size={60}
        color={theme === "light" ? "#2dd4bf" : "#eab308"}
        className="absolute bottom-40 left-40 md:block hidden"
        rotation={-15}
      />
      <Square 
        size={40} 
        color={theme === "light" ? "#fb923c" : "#10b981"} 
        className="absolute top-60 left-32 md:block hidden" 
      />
      <Curly
        className="absolute bottom-32 right-40 md:block hidden"
        width={120}
        height={30}
        color={theme === "light" ? "#000" : "#f59e0b"} 
      />
      <Curly
        className="absolute top-40 right-1/4 md:block hidden"
        width={80}
        height={20}
        color={theme === "light" ? "#f472b6" : "#f59e0b"} 
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="w-full flex flex-col items-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            id={id}
            className="relative"
            initial={{ rotate: 0 }}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <h1
              className={`${silkscreen.className} text-4xl sm:text-5xl md:text-7xl border-8 border-black dark:border-gray-200 py-4 px-6 sm:px-8 bg-fuchsia-400 dark:bg-yellow-500 shadow-[12px_12px_0px_0px_rgba(0,0,0)] dark:shadow-[12px_12px_0px_0px_rgba(229,231,235,0.8)] transition-all duration-300`}
            >
              PROJECTS
            </h1>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 dark:bg-gray-700 border-4 border-black dark:border-gray-200 z-10 rotate-12 transition-colors duration-300"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-teal-400 dark:bg-gray-600 border-4 border-black dark:border-gray-200 z-10 rotate-45 transition-colors duration-300"></div>
          </motion.div>
        </motion.div>

        {/* Projects grid using masonry layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={PROJECTS_CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* "More Projects" button */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Harshal292004"
            target="_blank"
            rel="noopener noreferrer"
            className="border-8 border-black dark:border-gray-200 bg-violet-400 dark:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 text-black dark:text-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0)] dark:shadow-[12px_12px_0px_0px_rgba(229,231,235,0.8)] relative overflow-hidden transition-all duration-300"
            variants={PROJECT_BUTTON_VARIANTS}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            {/* Button hover effect */}
            <motion.div
              className="absolute inset-0 bg-black dark:bg-gray-200 opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.05 }}
            />
            <span
              className={`${jetbrains_mono.className} text-base sm:text-xl relative z-10 flex items-center gap-3`}
            >
              <GitHubLogoIcon width={22} height={22} />
              VIEW MORE ON GITHUB
            </span>
            <div className="absolute w-6 h-6 sm:w-8 sm:h-8 top-4 -right-4 bg-yellow-400 dark:bg-gray-700 border-4 border-black dark:border-gray-200 transform rotate-45 transition-colors duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;