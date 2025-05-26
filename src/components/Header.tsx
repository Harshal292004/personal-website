"use client";
// Imports
import React, { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Mail } from "lucide-react";
import Image from "next/image";
import { LOGO_VARIANTS, NAVBAR_VARIANTS } from "@/lib/variants";

// Logo Imports
import harshal_logo_bright from "@/lib/harshal_logo_bright.svg";
import harshal_logo_dark from "@/lib/harshal_logo_dark.svg";
import useScrollHideNav from "@/lib/hooks/useScrollHideNav";
import useClickOutside from "@/lib/hooks/useClickOutside";

import { useTheme } from "next-themes";
import NavLinks from "./ui/Header/NavLinks";
import MobileNavLinks from "./ui/Header/MobileNavLinks";
import scrollToSection from "@/lib/scrollSection";

const Header = ({ id }: { id: string }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Modified useClickOutside implementation
  useClickOutside(menuRef, (e) => {
    // Only close if the click is not on the button
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      console.log("Clicked outside");
      setIsOpen(false);
    }
  });

  const showNav = useScrollHideNav();

  // Toggle dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Toggle menu function
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        id={id}
        className={`fixed left-0 bottom-5 z-30 w-full px-4 transition-all duration-500 ease-out ${
          showNav
            ? "translate-y-0 opacity-100"
            : "translate-y-40 opacity-0 pointer-events-none"
        }`}
        variants={NAVBAR_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <div
          className={twMerge(
            `mx-auto mt-4 flex h-[80px] w-full max-w-screen-xl
            items-center justify-between px-6 transition-all
            duration-300 ease-in-out`,
            theme === "dark"
              ? "bg-yellow-300 dark:text-gray-50 dark:bg-gray-800"
              : "bg-emerald-300 text-black",
            `border-2 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#000000]`,
          )}
        >
          {/* Logo */}
          <motion.div
            className="text-3xl font-black tracking-tight transform -rotate-2"
            variants={LOGO_VARIANTS}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection({ element_id: "home" });
              }}
            >
              {theme === "dark" ? (
                <Image
                  src={harshal_logo_bright}
                  alt="harshal_logo_bright"
                ></Image>
              ) : (
                <Image src={harshal_logo_dark} alt="harshal_logo_dark"></Image>
              )}
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-base lg:text-lg space-x-6">
            <NavLinks />

            <div className="flex items-center gap-4">
              {/* Theme toggle button */}
              <motion.button
                onClick={toggleTheme}
                className={twMerge(
                  `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000]`,
                  "dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black bg-emerald-400 hover:bg-emerald-300",
                )}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </motion.button>

              {/* Get in touch button */}
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection({ element_id: "contact" });
                }}
                className={twMerge(
                  `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] font-bold flex items-center gap-2`,
                  "dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black bg-emerald-400 hover:bg-emerald-300",
                )}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95
                }}
              >
                <Mail size={20} /> Get in touch
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              ref={buttonRef}
              className={twMerge(
                `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000]`,
                "dark:bg-yellow-400 dark:text-black bg-emerald-400",
              )}
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 mb-1.5 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-300 mt-1.5 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={twMerge(
                `md:hidden mt-2 px-6 py-4 border-2 border-black shadow-[8px_8px_0px_0px_#000000]`,
                " dark:bg-gray-800 dark:text-gray-50 bg-emerald-400",
              )}
            >
              <div className="flex flex-col space-y-4 max-h-[70vh] overflow-y-auto">
                <MobileNavLinks theme={theme} setIsOpen={setIsOpen} />

                <div className="flex items-center gap-4 mt-4">
                  {/* Theme toggle button */}
                  <motion.button
                    onClick={toggleTheme}
                    className={twMerge(
                      `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000]`,
                      "dark:bg-yellow-400 dark:text-black bg-emerald-400",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                  </motion.button>

                  {/* Get in touch button */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection({ element_id: "contact" });
                      setIsOpen(false);
                    }}
                    className={twMerge(
                      `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] font-bold flex items-center gap-2`,
                      "dark:bg-yellow-400 dark:text-black bg-emerald-400",
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} /> Get in touch
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export { Header };
