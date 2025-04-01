"use client";
import React from "react";
import { LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import scrollToSection from "@/lib/scrollSection";

const MobileNavLinks = ({
  theme,
  setIsOpen,
}: {
  theme: string | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Changed from Boolean to boolean
}) => {
  return (
    <>
      {LINKS.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          target={!link.href.startsWith("#") ? "_blank" : "_self"}
          rel={!link.href.startsWith("#") ? "noopener noreferrer" : undefined}
          className={twMerge(
            "px-3 py-2 font-bold text-black hover:bg-black hover:text-white",
            "transform transition-all duration-200 border-b-2 border-black",
            theme === "dark" &&
              "dark:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white"
          )}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: index * 0.1,
              duration: 0.3,
            },
          }}
          whileHover={{ scale: 1.02, x: 5 }}
          onClick={(e) => {
            if (link.href.startsWith("#")) {
              e.preventDefault();
              scrollToSection({ element_id: link.href.substring(1) });
              setIsOpen(false);
            }
          }}          
        >
          <span className="flex items-center justify-between">
            {link.label}
          </span>
        </motion.a>
      ))}
    </>
  );
};

export default MobileNavLinks;