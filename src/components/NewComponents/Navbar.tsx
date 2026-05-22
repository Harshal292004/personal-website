"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { caveat, space_mono, lora } from "@/lib/fonts";
import scrollToSection from "@/lib/scrollSection";
export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element_id = href.substring(1);
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          scrollToSection({ element_id });
        }, 100);
      } else {
        scrollToSection({ element_id });
      }
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on navigation changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { label: "About Me", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full bg-[#f9f5ee] dark:bg-[#161819] backdrop-blur-md border-b border-[#ebd9c8] dark:border-zinc-800 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Handwriting Styled Logo */}
        <Link href="/" className="group flex flex-col">
          <span
            className={`${caveat.className} text-2xl font-bold text-zinc-800 dark:text-zinc-200 transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105`}
          >
            h.malani
          </span>
          <span
            className={`${space_mono.className} text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest`}
          >
            engineer
          </span>
        </Link>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {navLinks.map((link) => {
              return (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="relative py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d97706] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="relative py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d97706] transition-all duration-300 group-hover:w-full" />
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle, Retro Link & Hamburger Button */}
          <div className="flex items-center gap-3">
            {/* Link to Old Website (Desktop only) */}
            <Link
              href="/old"
              className="hidden sm:flex items-center gap-0.5 text-xs font-semibold px-2.5 py-1.5 rounded-md border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-300"
            >
              <span>Old site</span>
              <ArrowUpRight size={12} className="text-zinc-400" />
            </Link>

            {/* Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-800 dark:text-yellow-400 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun size={15} className="animate-spin-slow" />
                ) : (
                  <Moon size={15} />
                )
              ) : (
                <div className="w-[15px] h-[15px]" />
              )}
            </button>

            {/* Hamburger Button (Mobile only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 rounded-full border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-all duration-300 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sliding drawer overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden w-full bg-[#f9f5ee] dark:bg-[#161819] border-b border-[#ebd9c8] dark:border-zinc-800 backdrop-blur-lg overflow-hidden relative z-30"
          >
            {/* Ruled margin line decoration of diary/notebook paper */}
            <div className="absolute left-8 top-0 bottom-0 w-[1.5px] bg-rose-400/40 dark:bg-rose-900/25 pointer-events-none" />

            <div className="px-6 py-8 flex flex-col gap-6 relative pl-12">
              <ul className="flex flex-col gap-5 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                {navLinks.map((link) => {
                  const isExternal = link.href.startsWith("/");
                  return (
                    <li key={link.label} className="relative">
                      <span
                        className={`${caveat.className} absolute -left-6 top-1 text-rose-500/70 select-none text-xl`}
                      >
                        ✎
                      </span>
                      {isExternal ? (
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`${lora.className} inline-block font-light text-zinc-800 dark:text-zinc-200 transition-colors hover:text-[#d97706]`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => {
                            handleNavClick(link.href);
                            setIsMenuOpen(false);
                          }}
                          className={`${lora.className} inline-block font-light text-zinc-800 dark:text-zinc-200 transition-colors hover:text-[#d97706]`}
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="h-[1.5px] bg-dashed border-t border-[#ebd9c8] dark:border-zinc-800 my-2 -ml-6" />

              <div className="flex flex-col gap-3">
                <Link
                  href="/old"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between w-full max-w-[200px] text-xs font-semibold px-3 py-2 rounded-md border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-300"
                >
                  <span>Retro website</span>
                  <ArrowUpRight size={14} className="text-zinc-400" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
