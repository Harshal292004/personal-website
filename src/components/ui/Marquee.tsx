"use client";
import React from "react";
import { fira_code } from "@/lib/fonts";
import { PROGRAMMING_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";


export default function Marquee({ speed = 80 }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border 
                    bg-emerald-900 dark:bg-zinc-900 text-emerald-50 dark:text-yellow-400 py-3">
      <motion.div
        className="whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {PROGRAMMING_ITEMS.map((item) => (
          <span
            key={item}
            className={`mx-4 md:mx-6 lg:mx-8 text-base sm:text-xl md:text-2xl ${fira_code.className}`}
          >
            {item}
          </span>
        ))}
        {PROGRAMMING_ITEMS.map((item) => (
          <span
            key={`duplicate-${item}`}
            className={`mx-4 md:mx-6 lg:mx-8 text-base sm:text-xl md:text-2xl ${fira_code.className}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}