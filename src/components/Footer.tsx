"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  fira_code,
  space_grotesk,
  space_mono,
  vt323,
  press_start_2p,
} from "@/lib/fonts";
import { Mail, Moon, Sun, Check } from "lucide-react";
import { CONTAINER_VARIANTS, ITEM_VARIANTS, ICON_HOVER } from "@/lib/variants";
import { useTheme } from "next-themes";
import { QUICK_LINKS } from "@/lib/constants";
import scrollToSection from "@/lib/scrollSection";
import Link from "next/link";

const Footer = ({ id }: { id: string }) => {
  const { theme, setTheme } = useTheme();
  const [copied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("malaniharshal95@gmail.com");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      id={id}
      className="border-t-8 border-black dark:border-zinc-800 bg-green-400 dark:bg-zinc-900 py-12 px-4 sm:px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={CONTAINER_VARIANTS}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* QUICK LINKS */}
        <motion.div className="flex flex-col" variants={ITEM_VARIANTS}>
          <h2
            className={`${press_start_2p.className} text-2xl sm:text-3xl md:text-4xl mb-6 tracking-wider font-black text-black dark:text-yellow-500`}
          >
            QUICK LINKS
          </h2>
          <div className="flex flex-wrap gap-4">
            {QUICK_LINKS.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.href.startsWith("#") ? (
                  <button
                    onClick={() => {
                      scrollToSection({ element_id: item.href.substring(1) });
                    }}
                    className={`${vt323.className} text-2xl sm:text-3xl font-bold border-b-4 border-black dark:border-yellow-500 inline-block pb-1 hover:bg-black dark:hover:bg-yellow-500 hover:text-green-400 dark:hover:text-zinc-900 px-2 transition-all duration-300`}
                  >
                    {item.label}
                  </button>
                ) : (
                  // Ensures security and privacy when opening links in a new tab.
                  // "noopener" prevents the new page from accessing the original page via `window.opener`, avoiding potential security risks.
                  // "noreferrer" prevents sending the referrer header to the new page, the target site wont know from where the user came
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${vt323.className} text-2xl sm:text-3xl font-bold border-b-4 border-black dark:border-yellow-500 inline-block pb-1 hover:bg-black dark:hover:bg-yellow-500 hover:text-green-400 dark:hover:text-zinc-900 px-2 transition-all duration-300`}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="flex flex-col" variants={ITEM_VARIANTS}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 tracking-wider font-black text-black dark:text-yellow-500">
            CONTACT ME
          </h2>
          <div id="contact" className="flex flex-wrap gap-4 mt-4">
            {[
              {
                icon: <GitHubLogoIcon />,
                link: "https://github.com/Harshal292004",
                label: "GitHub",
              },
              {
                icon: <LinkedInLogoIcon />,
                link: "https://www.linkedin.com/in/harshal-malani-592a91279/",
                label: "LinkedIn",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black dark:bg-zinc-800 text-green-400 dark:text-yellow-500 p-3 border-4 border-black dark:border-zinc-700 shadow-md hover:shadow-none transition-all duration-300"
                whileHover="hover"
                variants={ICON_HOVER}
                aria-label={item.label}
              >
                {React.cloneElement(item.icon, {
                  className: "w-8 h-8 sm:w-10 sm:h-10",
                })}
              </motion.a>
            ))}
            <motion.button
              onClick={handleCopyEmail}
              className="bg-black dark:bg-zinc-800 text-green-400 dark:text-yellow-500 p-3 border-4 border-black dark:border-zinc-700 shadow-md hover:shadow-none transition-all duration-300"
              whileHover="hover"
              variants={ICON_HOVER}
            >
              {copied ? (
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
              ) : (
                <Mail className="w-8 h-8 sm:w-10 sm:h-10" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* BORDER */}
      <motion.div
        className="h-2 sm:h-4 bg-black dark:bg-yellow-500 my-8 sm:my-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* COPYRIGHT SECTION */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4"
        variants={CONTAINER_VARIANTS}
      >
        {/* CREDITS AND COPYRIGHT */}
        <motion.div className="flex flex-col" variants={ITEM_VARIANTS}>
          <p
            className={`${fira_code.className} text-lg sm:text-xl mb-2 text-black dark:text-zinc-300`}
          >
            Design Inspiration{" "}
            <a
              href="https://ronit.io/"
              className="underline decoration-wavy decoration-4 hover:bg-black dark:hover:bg-yellow-500 hover:text-green-400 dark:hover:text-zinc-900 px-1 transition-all duration-300"
            >
              ronit.io
            </a>
          </p>
          <p
            className={`${space_mono.className} text-lg sm:text-xl text-black dark:text-zinc-300`}
          >
            © 2025 Harshal | Built with ❤,🎵 & ☕
          </p>
        </motion.div>

        {/* BUILT WITH */}
        <motion.div
          className="flex justify-start md:justify-end"
          variants={ITEM_VARIANTS}
        >
          <motion.a
            href="https://github.com/Harshal292004/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className={`${space_grotesk.className} cursor-pointer text-lg sm:text-xl bg-black dark:bg-zinc-800 text-green-400 dark:text-yellow-500 p-3 sm:p-4 border-4 border-black dark:border-zinc-700 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(234,179,8,0.5)] hover:shadow-none transition-all duration-300`}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center gap-2">
              <CodeIcon className="w-5 h-5 sm:w-6 sm:h-6" /> with Next.js +
              Tailwind + Motion
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export { Footer };
