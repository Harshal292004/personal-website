"use client";
import React from "react";
import { motion } from "framer-motion";
import { jetbrains_mono, silkscreen } from "@/lib/fonts";
import { useTheme } from "next-themes";
import Circle from "./ui/shapes/Circle";
import Triangle from "./ui/shapes/Triangle";
import Square from "./ui/shapes/Square";
import Curly from "./ui/shapes/Curly";


const LoadingScreen= ({ progress  }:{progress:number}) => {
  const { theme } = useTheme();

  // Stagger animation for loading text letters
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Progress bar animation
  const progressBarVariants = {
    initial: { width: "0%" },
    animate: { 
      width: `${progress}%`,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      }
    },
  };

  // Pulse animation for shapes
  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative bg-gradient-to-br from-fuchsia-50 to-violet-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 1px, transparent 10px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Decorative elements */}
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <Circle 
          size={80} 
          color={theme === "light" ? "#f472b6" : "#f59e0b"} 
          className="absolute top-1/4 right-1/6 md:block hidden" 
        />
        <Triangle
          size={60}
          color={theme === "light" ? "#2dd4bf" : "#eab308"}
          className="absolute bottom-1/3 left-1/5 md:block hidden"
          rotation={-15}
        />
        <Square 
          size={40} 
          color={theme === "light" ? "#fb923c" : "#10b981"} 
          className="absolute top-1/2 left-1/4 md:block hidden" 
        />
        <Curly
          className="absolute bottom-1/4 right-1/5 md:block hidden"
          width={120}
          height={30}
          color={theme === "light" ? "#000" : "#f59e0b"} 
        />
        <Curly
          className="absolute top-1/3 right-1/3 md:block hidden"
          width={80}
          height={20}
          color={theme === "light" ? "#f472b6" : "#f59e0b"} 
        />

        {/* Mobile-only decorative elements */}
        <Circle 
          size={40} 
          color={theme === "light" ? "#f472b6" : "#f59e0b"} 
          className="absolute top-1/4 right-8 md:hidden block" 
        />
        <Triangle
          size={30}
          color={theme === "light" ? "#2dd4bf" : "#eab308"}
          className="absolute bottom-1/3 left-8 md:hidden block"
          rotation={-15}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Loading Title */}
        <motion.div
          className="relative mb-12"
          initial={{ rotate: 0 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h1
            className={`${silkscreen.className} text-3xl sm:text-4xl md:text-6xl border-8 border-black dark:border-gray-200 py-3 px-6 sm:px-8 bg-fuchsia-400 dark:bg-yellow-500 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(229,231,235,0.8)] transition-all duration-300`}
          >
            LOADING
          </h1>
          <div className="absolute -top-4 -right-4 w-8 h-8 md:w-12 md:h-12 bg-yellow-400 dark:bg-gray-700 border-4 border-black dark:border-gray-200 z-10 rotate-12 transition-colors duration-300"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 md:w-12 md:h-12 bg-teal-400 dark:bg-gray-600 border-4 border-black dark:border-gray-200 z-10 rotate-45 transition-colors duration-300"></div>
        </motion.div>

        {/* Loading text animation */}
        <div className="flex justify-center mb-8">
          {["P", "L", "E", "A", "S", "E", " ", "W", "A", "I", "T", "..."].map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={`${jetbrains_mono.className} text-xl sm:text-2xl md:text-3xl ${letter === " " ? "w-4" : ""} text-black dark:text-gray-200`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress bar container */}
        <div className="w-full max-w-md h-12 border-8 border-black dark:border-gray-200 bg-white dark:bg-gray-700 relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(229,231,235,0.8)]">
          {/* Progress bar fill */}
          <motion.div
            className="h-full bg-violet-400 dark:bg-yellow-500"
            variants={progressBarVariants}
            initial="initial"
            animate="animate"
          />
          
          {/* Progress percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`${jetbrains_mono.className} text-black dark:text-gray-200 font-bold text-lg sm:text-xl z-10`}>
              {Math.round(progress)}%
            </span>
          </div>
          
          {/* Decorative accent */}
          <div className="absolute top-1/2 right-4 w-4 h-4 bg-yellow-400 dark:bg-gray-600 border-2 border-black dark:border-gray-200 transform rotate-45 transition-colors duration-300"></div>
        </div>
        
        {/* Loading tip */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={`${jetbrains_mono.className} text-sm mt-6 text-center max-w-xs sm:max-w-md text-black dark:text-gray-300`}
        >
          Assembling pixels in the most creative way possible...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;