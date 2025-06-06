import React, { useState } from "react";

import scrollToSection from "@/lib/scrollSection";
import { LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";
import { PdfViewer } from "./PdfViewer";
const NavLinks = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleRouteChange = ({ href }: { href: string }) => {
    router.push(href);
  };

  return (
    <>
      {LINKS.map((link) => (
        <>
          {link.label === "Resume" ? (
            <>
              <motion.button
                className={twMerge(
                  "px-3 py-1 font-bold text-black hover:-translate-y-1 transform transition-all duration-200",
                  "border-b-2 border-transparent hover:border-black relative group dark:text-yellow-400",
                )}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setModalIsOpen(true);
                }}
              >
                <span className="flex items-center gap-1">{link.label}</span>
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
              target={!link.href.startsWith("#") ? "_blank" : undefined}
              rel={
                !link.href.startsWith("#") ? "noopener noreferrer" : undefined
              }
              className={twMerge(
                "px-3 py-1 font-bold text-black hover:-translate-y-1 transform transition-all duration-200",
                "border-b-2 border-transparent hover:border-black relative group dark:text-yellow-400",
              )}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.2 },
              }}
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
                }
              }}
            >
              <span className="flex items-center gap-1">{link.label}</span>
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

export default NavLinks;
