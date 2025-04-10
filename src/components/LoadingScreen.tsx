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

      {/* Decorative elements with responsive positioning */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Desktop decorative elements */}
        <Circle 
          size={80} 
          color={theme === "light" ? "#059669" : "#f59e0b"} 
          className="absolute top-1/3 right-1/4 hidden md:block" 
        />
        <Triangle
          size={60}
          color={theme === "light" ? "#10b981" : "#eab308"}
          className="absolute bottom-1/3 left-1/5 hidden md:block"
          rotation={-15}
        />
        <Curly
          className="absolute top-1/3 right-1/3 hidden md:block"
          width={80}
          height={20}
          color={theme === "light" ? "#065f46" : "#f59e0b"} 
        />

        {/* Mobile decorative elements */}
        <Circle 
          size={40} 
          color={theme === "light" ? "#059669" : "#f59e0b"} 
          className="absolute top-1/4 right-8 block md:hidden" 
        />
        <Triangle
          size={30}
          color={theme === "light" ? "#10b981" : "#eab308"}
          className="absolute bottom-1/4 left-8 block md:hidden"
          rotation={15}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Loading Title - Responsive sizing */}
        <motion.div
          className="relative mb-8 sm:mb-10 md:mb-12"
          initial={{ rotate: 0 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h1
            className={`${silkscreen.className} text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl border-4 sm:border-6 md:border-8 border-black dark:border-gray-200 py-2 sm:py-3 px-4 sm:px-6 md:px-8 bg-emerald-400 dark:bg-yellow-500 shadow-[4px_4px_0px_0px_rgba(0,0,0)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(229,231,235,0.8)] sm:dark:shadow-[6px_6px_0px_0px_rgba(229,231,235,0.8)] md:dark:shadow-[8px_8px_0px_0px_rgba(229,231,235,0.8)] transition-all duration-300`}
          >
            LOADING
          </h1>
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-green-400 dark:bg-gray-700 border-2 sm:border-3 md:border-4 border-black dark:border-gray-200 z-10 rotate-12 transition-colors duration-300"></div>
          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-emerald-400 dark:bg-gray-600 border-2 sm:border-3 md:border-4 border-black dark:border-gray-200 z-10 rotate-45 transition-colors duration-300"></div>
        </motion.div>

        {/* Loading text animation - Responsive font size */}
        <div className="flex justify-center mb-6 sm:mb-8">
          {["P", "L", "E", "A", "S", "E", " ", "W", "A", "I", "T", "..."].map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={LETTER_VARIANTS}
              initial="hidden"
              animate="visible"
              className={`${jetbrains_mono.className} text-lg xs:text-xl sm:text-2xl md:text-3xl ${letter === " " ? "w-2 sm:w-3 md:w-4" : ""} text-black dark:text-gray-200`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress bar container - Responsive height and max-width */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-8 sm:h-10 md:h-12 border-4 sm:border-6 md:border-8 border-black dark:border-gray-200 bg-white dark:bg-gray-700 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(229,231,235,0.8)] sm:dark:shadow-[6px_6px_0px_0px_rgba(229,231,235,0.8)] md:dark:shadow-[8px_8px_0px_0px_rgba(229,231,235,0.8)]">
          {/* Progress bar fill */}
          <motion.div
            className="h-full bg-emerald-400 dark:bg-yellow-500"
            variants={PROGRESS_BAR_VARIANTS}
            initial="initial"
            animate="animate"
          />
          
          {/* Progress percentage - Responsive font size */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`${jetbrains_mono.className} text-black dark:text-gray-200 font-bold text-sm sm:text-lg md:text-xl z-10`}>
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Decorative accent - Responsive size */}
          <div className="absolute top-1/2 right-2 sm:right-3 md:right-4 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 dark:bg-gray-600 border border-black dark:border-gray-200 transform rotate-45 transition-colors duration-300"></div>
        </div>
        
        {/* Loading tip - Responsive font size and width */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={`${jetbrains_mono.className} text-xs sm:text-sm mt-4 sm:mt-6 text-center max-w-xs sm:max-w-md text-black dark:text-gray-300 px-4`}
        >
          Assembling pixels in the most creative way possible...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;