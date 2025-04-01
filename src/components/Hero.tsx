"use client";
import React, { useEffect, useState, useCallback } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import harshal from "@/lib/harshal.jpg";
import { useTheme } from "next-themes";

import { fira_code, jetbrains_mono } from "@/lib/fonts";

import Star from "./ui/shapes/Star";
import Circle from "./ui/shapes/Circle";
import Triangle from "./ui/shapes/Triangle";

import Terminal from "./ui/Hero/Terminal";

import useGreetingText from "@/lib/hooks/useGreetingsText";
import scrollToSection from "@/lib/scrollSection";

import { CONTAINER_VARIANTS,ITEM_VARIANTS } from "@/lib/variants";



const Hero= ({ id }:{id:string}) => {
  const { text, showCursor } = useGreetingText();
  const { theme } = useTheme();

  // Animation variants

  return (
    <div
      id={id}
      className="dark:bg-zinc-900 flex min-h-[80dvh] w-full flex-col items-center justify-center py-4 bg-green-50 
                bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] 
                dark:bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] 
                bg-[size:70px_70px]"
    >
      {/* Decorative elements */}
      <Star className="top-8 right-8 animate-pulse" color={theme === "dark" ? "#FFD54F" : "#43A047"} size={50} />
      <Star
        className="top-16 left-16 animate-pulse"
        color={theme === "dark" ? "#FFECB3" : "#2E7D32"}
        size={30}
      />
     
      <Circle
        className="top-12 left-1/4 animate-pulse"
        color={theme === "dark" ? "#E0E0E0" : "#FFA726"}
        size={25}
      />
      <Circle
        className="bottom-24 left-32 animate-pulse"
        color={theme === "dark" ? "#BDBDBD" : "#FF9800"}
        size={15}
      />
      <Triangle
        className="top-1/3 right-5 animate-pulse"
        color={theme === "dark" ? "#F9A825" : "#FF5722"}
        size={20}
      />

      <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row justify-around items-center w-full max-w-7xl px-4 sm:px-6 gap-6 lg:gap-16 mt-2"
      >
        {/* About */}
        <motion.div 
          variants={ITEM_VARIANTS}
          className="flex flex-col justify-center max-w-full w-full md:w-1/2"
        >
          {/* Greeting with typing animation */}
          <div
            className={twMerge(
              `${text.style} max-w-[280px] text-2xl md:text-3xl lg:text-4xl tracking-widest flex items-center dark:text-yellow-300`
            )}
          >
            {text.text}
            <span
              className={`ml-1 h-14 w-2 ${text.cursorStyle} ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity dark:bg-yellow-300`}
            ></span>
          </div>

          {/* Intro */}
          <motion.h2
            variants={ITEM_VARIANTS}
            whileHover={{ scale: 1.02 }}
            className={twMerge(
              `${jetbrains_mono.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 max-w-[600px]`,
              `border-4 border-black dark:border-white shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.5)] p-4 
              bg-emerald-500 dark:bg-yellow-500 text-emerald-950 dark:text-zinc-900 
              hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] 
              transform hover:translate-x-1 hover:translate-y-1 transition-all`
            )}
          >
            I'm Harshal Malani. <span className="wave-hand text-3xl">👋</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={ITEM_VARIANTS}
            className={twMerge(
              `text-lg sm:text-xl md:text-2xl mt-3 mb-2 max-w-2xl`,
              `${fira_code.className} text-green-900 dark:text-gray-200`
            )}
          >
            I am a 2nd-year Information Technology student from Nagpur, India,
            passionate about building software. As an Open Source Contributor
            and Web Developer, I actively contribute to projects that solve
            real-world problems.
          </motion.p>

          <motion.p
            variants={ITEM_VARIANTS}
            className={twMerge(
              `text-lg sm:text-xl md:text-2xl mb-4 max-w-2xl`,
              `${fira_code.className} text-green-900 dark:text-gray-300`
            )}
          >
            My interests lie in Cloud-Native Infrastructure and Generative AI. I
            thrive on innovation, collaboration, and leveraging technology to
            create impactful solutions.
          </motion.p>

          {/* Terminal with Random Facts */}
          <motion.div 
            variants={ITEM_VARIANTS}
            className="hidden md:block"
          >
            <Terminal/>
          </motion.div>
        </motion.div>

        {/* Image section */}
        <motion.div
          variants={ITEM_VARIANTS} 
          className="max-w-full w-full md:w-1/2 flex flex-col items-center md:items-end relative mb-6"
        >
          <Star className="top-0 right-4 md:-top-6 md:right-12 animate-pulse" color={theme === "dark" ? "#FFC107" : undefined} />
          <Star className="hidden md:block -left-6 top-1/4 animate-pulse" color={theme === "dark" ? "#E0E0E0" : undefined} />
          <Star className="bottom-12 left-4 md:bottom-20 md:left-0 animate-pulse" color={theme === "dark" ? "#FFECB3" : undefined} />

          <motion.div
            whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
            className={twMerge(
              `border-8 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] 
              p-4 sm:p-6 bg-emerald-200 dark:bg-zinc-800 -rotate-2 relative overflow-hidden`,
              `w-64 h-auto sm:w-80 md:w-88 lg:w-[420px] flex flex-col items-center justify-center`
            )}
          >
            <div className="text-center">
              <Link
                href="https://github.com/Harshal292004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className={`${fira_code.className} text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-5 text-green-950 dark:text-yellow-400 cursor-pointer hover:text-green-700 dark:hover:text-yellow-300 transition-colors`}
                >
                  git config user.name "Harshal292004"
                </motion.h3>
              </Link>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={harshal}
                  alt="Harshal Malani"
                  className={twMerge(
                    "border-8 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transform hover:translate-x-1 hover:translate-y-1 transition-all",
                    `w-48 h-auto sm:w-56 md:w-64 lg:w-72`
                  )}
                />

                {/* Neo-brutalism decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 dark:bg-yellow-500 border-4 border-black dark:border-white z-10"></div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-600 dark:bg-zinc-600 border-4 border-black dark:border-white z-10 rotate-12"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Terminal for mobile view */}
          <motion.div 
            variants={ITEM_VARIANTS}
            className="md:hidden w-full mt-4 mb-2"
          >
            <Terminal/>
          </motion.div>

          <div className="flex flex-row justify-around items-center gap-4 mt-2">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="https://github.com/Harshal292004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon
                  className={twMerge(
                    `w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mt-4 md:mt-6 p-2 bg-black dark:bg-zinc-800 text-white`,
                    "rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] transform hover:translate-x-1 hover:translate-y-1 transition-all"
                  )}
                ></GitHubLogoIcon>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href="https://www.linkedin.com/in/harshal-malani-592a91279/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon
                  className={twMerge(
                    `w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mt-4 md:mt-6 p-2 bg-blue-700 dark:bg-blue-600 text-white`,
                    "rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] transform hover:translate-x-1 hover:translate-y-1 transition-all"
                  )}
                ></LinkedInLogoIcon>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className={twMerge(
                  `${fira_code.className}`,
                  "h-12 text-base sm:h-14 sm:text-lg md:text-xl lg:h-16 lg:text-2xl mt-4 md:mt-6",
                  "border-4 border-black dark:border-white bg-orange-400 dark:bg-yellow-500 hover:bg-orange-500 dark:hover:bg-yellow-600 text-orange-950 dark:text-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] transform hover:translate-x-1 hover:translate-y-1 transition-all"
                )}
                onClick={() => {scrollToSection({element_id:"contact"})}}
              >
                GET IN TOUCH
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;