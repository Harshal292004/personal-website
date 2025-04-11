"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RocketIcon,
  LightningBoltIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { silkscreen, jetbrains_mono, fira_code } from "@/lib/fonts";
import { useTheme } from "next-themes";
import Star from "./ui/shapes/Star";
import Dots from "./ui/shapes/Dots";
import { PROJECT_BUTTON_VARIANTS } from "@/lib/variants";
import { Code, Contact, Mail, Github } from "lucide-react";
import scrollToSection from "@/lib/scrollSection";

const Experience = ({ id }: { id: string }) => {
  const { theme } = useTheme();

  return (
    <div
      id={id}
      className="w-full py-12 md:py-24 relative bg-gradient-to-tr from-green-50 to-emerald-50 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden transition-colors duration-300"
    >
      {/* Background pattern - diagonal lines */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, #10b981 0, #10b981 1px, transparent 1px, transparent 10px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Dark mode pattern overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-15"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #eab308 0, #eab308 1px, transparent 1px, transparent 10px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative elements */}
      <Star
        className="top-16 right-8 md:right-20"
        color={theme === "light" ? "#10b981" : "#eab308"}
        size={60}
      />
      <Star
        className="bottom-32 left-4 md:left-16"
        color={theme === "light" ? "#059669" : "#ca8a04"}
        size={45}
      />
      <Dots
        className="top-40 left-1/4 hidden sm:block"
        color={theme === "light" ? "#000000" : "#d4d4d8"}
      />
      <Dots
        className="bottom-24 right-1/4 hidden sm:block"
        color={theme === "light" ? "#10b981" : "#eab308"}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="w-full flex flex-col items-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative"
            initial={{ rotate: 0 }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <h1
              className={`${silkscreen.className} text-4xl sm:text-5xl md:text-7xl border-6 sm:border-8 border-black dark:border-zinc-200 py-3 sm:py-4 px-4 sm:px-8 bg-emerald-400 dark:bg-yellow-500 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(161,161,170,0.5)] transition-colors duration-300`}
            >
              EXPERIENCE
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-green-300 dark:bg-zinc-700 border-4 border-black dark:border-zinc-200 z-10 rotate-12 transition-colors duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-teal-400 dark:bg-yellow-600 border-4 border-black dark:border-zinc-200 z-10 rotate-45 transition-colors duration-300"></div>
          </motion.div>
        </motion.div>

        {/* Open Source Contribution Card */}
        <motion.div
          className="max-w-3xl mx-auto mb-8 sm:mb-16 border-6 sm:border-8 border-black dark:border-zinc-200 bg-white dark:bg-zinc-800 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(161,161,170,0.5)] p-4 sm:p-8 relative transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <h2
              className={`${jetbrains_mono.className} text-xl sm:text-2xl font-bold dark:text-zinc-200 transition-colors duration-300`}
            >
              Open Source Contributor : Kubeflow
            </h2>
          </div>

          <p
            className={`${fira_code.className} text-center text-base sm:text-lg mb-4 dark:text-zinc-300 transition-colors duration-300`}
          >
            I contributed to the kubeflow trainer
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-emerald-200 dark:bg-zinc-700 border-2 border-black dark:border-zinc-500 rounded-full text-sm font-mono dark:text-zinc-300 transition-colors duration-300">
              GoLang
            </span>
            <span className="px-3 py-1 bg-emerald-200 dark:bg-zinc-700 border-2 border-black dark:border-zinc-500 rounded-full text-sm font-mono dark:text-zinc-300 transition-colors duration-300">
              DevOps
            </span>
            <span className="px-3 py-1 bg-emerald-200 dark:bg-zinc-700 border-2 border-black dark:border-zinc-500 rounded-full text-sm font-mono dark:text-zinc-300 transition-colors duration-300">
              Kubernetes
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6">
            <motion.a
              href="https://github.com/kubeflow"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-4 border-black dark:border-zinc-200 bg-emerald-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(161,161,170,0.5)] flex items-center gap-2 relative overflow-hidden cursor-pointer w-full sm:w-auto justify-center transition-colors duration-300`}
              variants={PROJECT_BUTTON_VARIANTS}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 dark:text-yellow-500 transition-colors duration-300" />
              <span
                className={`${jetbrains_mono.className} text-base sm:text-lg text-black dark:text-zinc-200 transition-colors duration-300`}
              >
                KUBEFLOW
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/kubeflow/trainer"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-4 border-black dark:border-zinc-200 bg-emerald-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] flex items-center gap-2 relative overflow-hidden cursor-pointer w-full sm:w-auto justify-center transition-colors duration-300`}
              variants={PROJECT_BUTTON_VARIANTS}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-colors duration-300" />
              <span
                className={`${jetbrains_mono.className} text-base sm:text-lg text-black transition-colors duration-300`}
              >
                KUBEFLOW TRAINER
              </span>
            </motion.a>
          </div>

          {/* Corner decoration */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 -right-6 sm:-right-8 -bottom-6 sm:-bottom-8 transform rotate-45 border-6 sm:border-8 border-black dark:border-zinc-200 bg-emerald-400 dark:bg-yellow-500 transition-colors duration-300"></div>
        </motion.div>

        {/* Current status card */}
        <motion.div
          className="max-w-3xl mx-auto mb-8 sm:mb-16 border-6 sm:border-8 border-black dark:border-zinc-200 bg-white dark:bg-zinc-800 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(161,161,170,0.5)] p-4 sm:p-8 relative transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <CrossCircledIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 dark:text-yellow-500 transition-colors duration-300" />
            <h2
              className={`${jetbrains_mono.className} text-xl sm:text-2xl font-bold dark:text-zinc-200 transition-colors duration-300`}
            >
              Currently Building Experience
            </h2>
          </div>

          <p
            className={`${fira_code.className} text-center text-base sm:text-lg mb-6 sm:mb-8 dark:text-zinc-300 transition-colors duration-300`}
          >
            I'm actively working on projects and honing my skills. While formal
            experience is in progress, my portfolio demonstrates my capabilities
            and dedication to creating impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 sm:gap-6">
            <motion.button
              className={`border-4 border-black dark:border-zinc-200 bg-emerald-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(161,161,170,0.5)] flex items-center gap-2 relative overflow-hidden cursor-pointer w-full sm:w-auto justify-center transition-colors duration-300`}
              variants={PROJECT_BUTTON_VARIANTS}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection({ element_id: "projects" })}
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5 dark:text-yellow-500 transition-colors duration-300" />
              <span
                className={`${jetbrains_mono.className} text-base sm:text-lg text-black dark:text-zinc-200 transition-colors duration-300`}
              >
                VIEW PROJECTS
              </span>
            </motion.button>

            <motion.button
              className={`border-4 border-black dark:border-zinc-200 bg-emerald-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] flex items-center gap-2 relative overflow-hidden cursor-pointer w-full sm:w-auto justify-center transition-colors duration-300`}
              variants={PROJECT_BUTTON_VARIANTS}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection({ element_id: "contact" })}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-colors duration-300" />
              <span
                className={`${jetbrains_mono.className} text-base sm:text-lg text-black transition-colors duration-300`}
              >
                CONTACT ME
              </span>
            </motion.button>
          </div>

          {/* Corner decoration */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 -right-6 sm:-right-8 -bottom-6 sm:-bottom-8 transform rotate-45 border-6 sm:border-8 border-black dark:border-zinc-200 bg-emerald-400 dark:bg-yellow-500 transition-colors duration-300"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
