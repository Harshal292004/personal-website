"use client";
import React from "react";
import { motion } from "framer-motion";
import { jetbrains_mono, silkscreen } from "@/lib/fonts";
import { useTheme } from "next-themes";
import Circle from "@/components/ui/shapes/Circle";
import Triangle from "@/components/ui/shapes/Triangle";
import Curly from "@/components/ui/shapes/Curly";
import Square from "@/components/ui/shapes/Square";
import { PLUSE_VARIANTS } from "@/lib/variants";
const page= () => {
  const { theme } = useTheme();

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
        variants={PLUSE_VARIANTS}
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
            Memes Coming Soon
          </h1>
          <div className="absolute -top-4 -right-4 w-8 h-8 md:w-12 md:h-12 bg-yellow-400 dark:bg-gray-700 border-4 border-black dark:border-gray-200 z-10 rotate-12 transition-colors duration-300"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 md:w-12 md:h-12 bg-teal-400 dark:bg-gray-600 border-4 border-black dark:border-gray-200 z-10 rotate-45 transition-colors duration-300"></div>
        </motion.div>

        

        
        {/* Loading tip */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={`${jetbrains_mono.className} text-sm mt-6 text-center max-w-xs sm:max-w-md text-black dark:text-gray-300`}
        >
          Sorry still collecting memes ;(
        </motion.p>
      </div>
    </div>
  );
};

export default page;
