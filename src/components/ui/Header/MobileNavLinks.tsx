import React, { useState } from "react";
import scrollToSection from "@/lib/scrollSection";
import { LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";
import { PdfViewer } from "./PdfViewer";

const MobileNavLinks = ({
  theme,
  setIsOpen,
}: {
  theme: string | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleRouteChange = ({ href }: { href: string }) => {
    router.push(href);
  };

  return (
    <>
      {LINKS.map((link, index) => (
        <>
          {link.label === "Resume" ? (
            <>
              <motion.button
                className={twMerge(
                  "px-3 py-2 font-bold text-black hover:bg-black hover:text-white",
                  "transform transition-all duration-200 border-b-2 border-black",
                  theme === "dark" &&
                    "dark:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white",
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
                  e.preventDefault();
                  setModalIsOpen(true);
                }}
              >
                <span className="flex items-center justify-between">
                  {link.label}
                </span>

                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-gray-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
              <PdfViewer
                modalIsOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              ></PdfViewer>
            </>
          ) : (
            <motion.a
              key={link.href}
              href={link.href}
              target={!link.href.startsWith("#") ? "_blank" : "_self"}
              rel={
                !link.href.startsWith("#") ? "noopener noreferrer" : undefined
              }
              className={twMerge(
                "px-3 py-2 font-bold text-black hover:bg-black hover:text-white",
                "transform transition-all duration-200 border-b-2 border-black",
                theme === "dark" &&
                  "dark:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white",
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
                  if (pathname !== "/") {
                    handleRouteChange({ href: "/" });
                    setTimeout(() => {
                      scrollToSection({ element_id: link.href.substring(1) });
                    }, 100);
                  } else {
                    scrollToSection({ element_id: link.href.substring(1) });
                  }

                  setIsOpen(false);
                }
              }}
            >
              <span className="flex items-center justify-between">
                {link.label}
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-gray-300"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          )}
        </>
      ))}
    </>
  );
};

export default MobileNavLinks;
