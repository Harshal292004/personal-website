"use client";
import React from "react";
import { motion } from "framer-motion";
import { jetbrains_mono, silkscreen } from "@/lib/fonts";
import { useTheme } from "next-themes";
import Circle from "./ui/shapes/Circle";
import Triangle from "./ui/shapes/Triangle";
import Curly from "./ui/shapes/Curly";
import { LETTER_VARIANTS, PROGRESS_BAR_VARIANT } from "@/lib/variants";

const LoadingScreen = ({ progress }: { progress: number }) => {
  const { theme } = useTheme();
  const PROGRESS_BAR_VARIANTS = PROGRESS_BAR_VARIANT({ progress: progress });

  return (
    <motion.div 
      className="w-full h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-700"
      initial={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${theme === "light" ? "#10b981" : "#6366f1"} 0, ${theme === "light" ? "#10b981" : "#6366f1"} 1px, transparent 1px, transparent 10px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative elements with enhanced responsive positioning */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Large screen decorative elements */}
        <Circle 
          size={80} 
          color={theme === "light" ? "#059669" : "#f59e0b"} 
          className="absolute top-1/3 right-1/4 hidden lg:block" 
        />
        <Triangle
          size={60}
          color={theme === "light" ? "#10b981" : "#eab308"}
          className="absolute bottom-1/3 left-1/5 hidden lg:block"
          rotation={-15}
        />
        <Curly
          className="absolute top-1/3 right-1/3 hidden lg:block"
          width={80}
          height={20}
          color={theme === "light" ? "#065f46" : "#f59e0b"} 
        />

        {/* Medium screen decorative elements */}
        <Circle 
          size={60} 
          color={theme === "light" ? "#059669" : "#f59e0b"} 
          className="absolute top-1/4 right-1/5 hidden md:block lg:hidden" 
        />
        <Triangle
          size={40}
          color={theme === "light" ? "#10b981" : "#eab308"}
          className="absolute bottom-1/4 left-1/6 hidden md:block lg:hidden"
          rotation={-10}
        />

        {/* Small screen decorative elements */}
        <Circle 
          size={40} 
          color={theme === "light" ? "#059669" : "#f59e0b"} 
          className="absolute top-1/4 right-8 hidden sm:block md:hidden" 
        />
        <Triangle
          size={30}
          color={theme === "light" ? "#10b981" : "#eab308"}
          className="absolute bottom-1/4 left-8 hidden sm:block md:hidden"
          rotation={15}
        />

        {/* Extra small screen decorative elements */}
        <Circle 
          size={30} 
          color={theme === "light" ? "#059669" : "#f59e0b"} 
          className="absolute top-1/5 right-4 block sm:hidden" 
        />
        <Triangle
          size={20}
          color={theme === "light" ? "#10b981" : "#eab308"}
          className="absolute bottom-1/5 left-4 block sm:hidden"
          rotation={20}
        />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Loading Title - Enhanced responsive sizing */}
        <motion.div
          className="relative mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ rotate: 0 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h1
            className={`${silkscreen.className} text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                         border-2 xs:border-3 sm:border-4 md:border-6 lg:border-8 
                         border-black dark:border-gray-200 
                         py-1 xs:py-2 sm:py-2 md:py-3 
                         px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 
                         bg-emerald-400 dark:bg-yellow-500 
                         shadow-[2px_2px_0px_0px_rgba(0,0,0)] 
                         xs:shadow-[3px_3px_0px_0px_rgba(0,0,0)] 
                         sm:shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
                         md:shadow-[6px_6px_0px_0px_rgba(0,0,0)] 
                         lg:shadow-[8px_8px_0px_0px_rgba(0,0,0)] 
                         dark:shadow-[2px_2px_0px_0px_rgba(229,231,235,0.8)] 
                         xs:dark:shadow-[3px_3px_0px_0px_rgba(229,231,235,0.8)] 
                         sm:dark:shadow-[4px_4px_0px_0px_rgba(229,231,235,0.8)] 
                         md:dark:shadow-[6px_6px_0px_0px_rgba(229,231,235,0.8)] 
                         lg:dark:shadow-[8px_8px_0px_0px_rgba(229,231,235,0.8)] 
                         transition-all duration-300`}
          >
            LOADING
          </h1>
          <div className="absolute -top-1 -right-1 xs:-top-1.5 xs:-right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 
                         w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 
                         bg-green-400 dark:bg-gray-700 
                         border border-black dark:border-gray-200 z-10 rotate-12 transition-colors duration-300"></div>
          <div className="absolute -bottom-1 -left-1 xs:-bottom-1.5 xs:-left-1.5 sm:-bottom-2 sm:-left-2 md:-bottom-3 md:-left-3 lg:-bottom-4 lg:-left-4 
                         w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 
                         bg-emerald-400 dark:bg-gray-600 
                         border border-black dark:border-gray-200 z-10 rotate-45 transition-colors duration-300"></div>
        </motion.div>

        {/* Loading text animation - Enhanced responsive font size */}
        <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
          {["P", "L", "E", "A", "S", "E", " ", "W", "A", "I", "T", "..."].map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={LETTER_VARIANTS}
              initial="hidden"
              animate="visible"
              className={`${jetbrains_mono.className} text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl ${letter === " " ? "w-1 xs:w-2 sm:w-3 md:w-4" : ""} text-black dark:text-gray-200`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress bar container - Enhanced responsive height and max-width */}
        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg 
                       h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 
                       border-2 xs:border-3 sm:border-4 md:border-6 lg:border-8 
                       border-black dark:border-gray-200 
                       bg-white dark:bg-gray-700 
                       relative overflow-hidden 
                       shadow-[2px_2px_0px_0px_rgba(0,0,0)] 
                       xs:shadow-[3px_3px_0px_0px_rgba(0,0,0)] 
                       sm:shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
                       md:shadow-[6px_6px_0px_0px_rgba(0,0,0)] 
                       lg:shadow-[8px_8px_0px_0px_rgba(0,0,0)] 
                       dark:shadow-[2px_2px_0px_0px_rgba(229,231,235,0.8)] 
                       xs:dark:shadow-[3px_3px_0px_0px_rgba(229,231,235,0.8)] 
                       sm:dark:shadow-[4px_4px_0px_0px_rgba(229,231,235,0.8)] 
                       md:dark:shadow-[6px_6px_0px_0px_rgba(229,231,235,0.8)] 
                       lg:dark:shadow-[8px_8px_0px_0px_rgba(229,231,235,0.8)]">
          {/* Progress bar fill */}
          <motion.div
            className="h-full bg-emerald-400 dark:bg-yellow-500"
            variants={PROGRESS_BAR_VARIANTS}
            initial="initial"
            animate="animate"
          />
          
          {/* Progress percentage - Enhanced responsive font size */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`${jetbrains_mono.className} text-black dark:text-gray-200 font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl z-10`}>
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Decorative accent - Enhanced responsive size */}
          <div className="absolute top-1/2 right-1 xs:right-1.5 sm:right-2 md:right-3 lg:right-4 
                         w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 
                         bg-green-400 dark:bg-gray-600 
                         border border-black dark:border-gray-200 
                         transform -translate-y-1/2 rotate-45 transition-colors duration-300"></div>
        </div>
        
        {/* Loading tip - Enhanced responsive font size and width */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={`${jetbrains_mono.className} text-xs xs:text-sm sm:text-base mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-gray-300 px-2 xs:px-3 sm:px-4`}
        >
          Assembling pixels in the most creative way possible...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;