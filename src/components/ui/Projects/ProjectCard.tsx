"use client"
import { ELinkState, type IProjectProps } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECT_ITEM_VARIANTS, PROJECT_BUTTON_VARIANTS, PROJECT_TAG_VARIANTS } from "@/lib/variants";
import { jetbrains_mono, silkscreen, fira_code, space_mono } from "@/lib/fonts";
import { useTheme } from "next-themes";

import {
  GitHubLogoIcon,
  ExternalLinkIcon,
  LinkBreak2Icon,
  Cross2Icon,
} from "@radix-ui/react-icons";

const ProjectCard = ({
  project,
  index,
}: {
  project: IProjectProps;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  // Color palette that complements but differs from TechStack
  const lightBgColors = [
    "#c084fc", // Purple
    "#f472b6", // Pink
    "#fb923c", // Orange
    "#facc15", // Yellow
    "#a3e635", // Green
    "#2dd4bf", // Teal
  ];
  
  // Dark mode colors - still colorful but with lower saturation/brightness
  const darkBgColors = [
    "#9333ea", // Dark purple
    "#db2777", // Dark pink
    "#ea580c", // Dark orange
    "#eab308", // Dark yellow
    "#65a30d", // Dark green
    "#0d9488", // Dark teal
  ];
  
  const bgColors = theme === "dark" ? darkBgColors : lightBgColors;
  const bgColor = bgColors[index % bgColors.length];

  return (
    <motion.div
      className="mb-10 sm:mb-20 w-full"
      variants={PROJECT_ITEM_VARIANTS}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative border-8 border-black dark:border-gray-200 bg-white dark:bg-gray-800 shadow-[12px_12px_0px_0px_rgba(0,0,0)] dark:shadow-[12px_12px_0px_0px_rgba(229,231,235,0.8)]
                   hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[6px_6px_0px_0px_rgba(229,231,235,0.8)] overflow-hidden transition-all duration-300"
        style={{
          transform: isHovered ? "translate(6px, 6px)" : "translate(0px, 0px)",
        }}
      >
        {/* Top border decoration */}
        <div
          className="h-8 w-full border-b-4 border-black dark:border-gray-200 transition-colors duration-300"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex gap-2 h-full items-center ml-4">
            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black dark:border-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black dark:border-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black dark:border-gray-200"></div>
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 sm:p-8">
          {/* Project number */}
          <div className="flex justify-between items-start mb-4">
            <h3 className={`${jetbrains_mono.className} text-xl sm:text-3xl font-bold dark:text-gray-100`}>
              {project.title}
            </h3>
            <div
              className={`text-3xl sm:text-5xl ${silkscreen.className} font-bold -mt-2`}
              style={{ color: bgColor }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>

          {/* Description */}
          <p
            className={`${fira_code.className} text-sm sm:text-base mb-6 leading-relaxed dark:text-gray-300`}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="border-3 border-black dark:border-gray-200 px-2 sm:px-3 py-1 text-xs sm:text-sm"
                style={{ backgroundColor: bgColor }}
                variants={PROJECT_TAG_VARIANTS}
                initial="initial"
                whileHover="hover"
              >
                <span className={`${space_mono.className} dark:text-gray-900`}>{tag}</span>
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
            {project.github.state === ELinkState.ACTIVE ? (
              <motion.a
                href={project.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-black dark:bg-gray-200 text-white dark:text-gray-900 border-4 border-black dark:border-gray-200 transition-colors duration-300"
                variants={PROJECT_BUTTON_VARIANTS}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <GitHubLogoIcon width={18} height={18} />
                <span className={`${space_mono.className} text-sm sm:text-base`}>GITHUB</span>
              </motion.a>
            ) : (
              <div className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-4 border-gray-400 dark:border-gray-500 cursor-not-allowed transition-colors duration-300">
                <Cross2Icon width={18} height={18} />
                <span className={`${space_mono.className} text-sm sm:text-base`}>PRIVATE</span>
              </div>
            )}

            {project.live_demo.state === ELinkState.ACTIVE ? (
              <motion.a
                href={project.live_demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-black dark:bg-gray-200 text-white dark:text-gray-900 border-4 border-black dark:border-gray-200 transition-colors duration-300"
                variants={PROJECT_BUTTON_VARIANTS}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <ExternalLinkIcon width={18} height={18} />
                <span className={`${space_mono.className} text-sm sm:text-base`}>LIVE DEMO</span>
              </motion.a>
            ) : (
              <div className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-4 border-gray-400 dark:border-gray-500 cursor-not-allowed transition-colors duration-300">
                <LinkBreak2Icon width={18} height={18} />
                <span className={`${space_mono.className} text-sm sm:text-base`}>NO DEMO</span>
              </div>
            )}
          </div>
        </div>

        {/* Corner decoration */}
        <div
          className="absolute w-12 h-12 sm:w-16 sm:h-16 -right-6 sm:-right-8 -bottom-6 sm:-bottom-8 transform rotate-45 border-8 border-black dark:border-gray-200 transition-colors duration-300"
          style={{ backgroundColor: bgColor }}
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;