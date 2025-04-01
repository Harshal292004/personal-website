"use client";
// Imports
import React, { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { LOGO_VARIANTS, NAVBAR_VARIANTS } from "@/lib/variants";

// Logo Imports
import harshal_logo_bright from "@/lib/harshal_logo_bright.svg";
import harshal_logo_dark from "@/lib/harshal_logo_dark.svg";
import useScrollHideNav from "@/lib/hooks/useScrollHideNav";
import useClickOutside from "@/lib/hooks/useClickOutside";

import { useTheme } from "next-themes";
import { LINKS } from "@/lib/constants";

// Smooth scroll to section
import scrollToSection from "@/lib/scrollSection";

const Header = ({ id }: { id: string }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setIsOpen(false));
  const showNav = useScrollHideNav();

  // Toggle dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };



  return (
    <>
      <motion.nav
        id={id}
        className={`fixed left-0 bottom-5 z-50 w-full px-4 transition-all duration-500 ease-out ${
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
            `border-2 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#000000]`
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
                  "dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black bg-emerald-400 hover:bg-emerald-300"
                )}
                whileHover={{
                  scale: 1.05,
                  shadow: "6px 6px 0px 0px #000000",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  shadow: "2px 2px 0px 0px #000000",
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
                  "dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black bg-emerald-400 hover:bg-emerald-300"
                )}
                whileHover={{
                  scale: 1.05,
                  shadow: "6px 6px 0px 0px #000000",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  shadow: "2px 2px 0px 0px #000000",
                }}
              >
                <Mail size={20} /> Get in touch
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className={twMerge(
                `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000]`,
                "dark:bg-yellow-400 dark:text-black bg-emerald-400"
              )}
              onClick={() => setIsOpen(prev=>!prev)}
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
                " dark:bg-gray-800 dark:text-gray-50 bg-emerald-400"
              )}
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLinks theme={theme} setIsOpen={setIsOpen} />

                <div className="flex items-center gap-4 mt-4">
                  {/* Theme toggle button */}
                  <motion.button
                    onClick={toggleTheme}
                    className={twMerge(
                      `p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000]`,
                      "dark:bg-yellow-400 dark:text-black bg-emerald-400"
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
                      "dark:bg-yellow-400 dark:text-black bg-emerald-400"
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

function NavLinks() {
  return (
    <>
      {LINKS.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          target={!link.href.startsWith("#") ? "_blank" : undefined}
          rel={!link.href.startsWith("#") ? "noopener noreferrer" : undefined}
          className={twMerge(
            "px-3 py-1 font-bold text-black hover:-translate-y-1 transform transition-all duration-200",
            "border-b-2 border-transparent hover:border-black relative group dark:text-yellow-400"
          )}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.2 },
          }}
          onClick={(e) => {
            if (link.href.startsWith("#")) {
              e.preventDefault();
              scrollToSection({ element_id: link.href.substring(1) });
            }
          }}
        >
          <span className="flex items-center gap-1">
            {link.label}
            {!link.href.startsWith("#") && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.span>
            )}
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-gray-300"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      ))}
    </>
  );
}
function MobileNavLinks({
  theme,
  setIsOpen,
}: {
  theme: string | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  return (
    <>
      {LINKS.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : "_self"}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
            {link.label === "Blogs" && <ExternalLink size={16} />}
          </span>
        </motion.a>
      ))}
    </>
  );
}

export { Header };
