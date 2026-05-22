"use client";
import React, { useState } from "react";
import { lora, space_mono } from "@/lib/fonts";
import { Underline } from "./HandwrittenDoodles";
import { FileText, Download, Github, Linkedin, Mail } from "lucide-react";
import { NewPdfViewer } from "./NewPdfViewer";
import { handleDownloadResume } from "@/lib/handleResumeDownload";
import { motion } from "framer-motion";
export const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section id="hero" className="relative py-20 md:py-28 overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto px-6 relative z-10"
      >

        {/* Notebook-style Header Line */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`${space_mono.className} text-xs text-[#d97706] font-semibold tracking-wider uppercase bg-[#ebd9c8]/30 dark:bg-amber-900/20 px-2 py-1 rounded`}>
            About Me
          </span>
          <span className="flex-1 h-[1px] bg-dashed border-t border-[#ebd9c8] dark:border-zinc-800" />
          <span className={`${space_mono.className} text-[10px] text-zinc-400 dark:text-zinc-500`}>
            Nagpur, India
          </span>
        </div>

        {/* Headline */}
        <div className="relative mb-10">
          <h1 className={`${lora.className} text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-zinc-900 dark:text-zinc-50`}>
            Building <span className="relative inline-block italic font-medium text-[#d97706] px-1">
              software
              <Underline className="absolute left-0 bottom-[-5px] w-full h-3 text-[#d97706] opacity-70" color="currentColor" />
            </span> for real-world problems.
          </h1>
        </div>

        {/* Bio Text */}
        <div className={`${lora.className} text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 font-light`}>
          <p>
            I am a 4th-year{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Information Technology student
            </span>{" "}
            from Nagpur, India, passionate about building software. I maily work on web development, open source, and personal software projects.{" "}
          </p>
          <p>
            My interests lie in{" "}
            <span className="font-semibold italic text-[#d97706]">
              Generative AI
            </span>{" "}
            and{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Cloud-Native Infrastructure
            </span>
            . I thrive on innovation, collaboration, and leveraging technology to create impactful solutions.
          </p>
        </div>

        {/* Actions & Social Links */}
        <div className="mt-12 flex flex-wrap gap-4 items-center">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setModalIsOpen(true)}
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <FileText size={16} />
              <span>Read Resume</span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-[#161819] hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Divider line for design accent */}
            <span className="hidden sm:block h-6 w-[1.5px] bg-[#ebd9c8] dark:bg-zinc-800" />

            <a
              href="https://github.com/Harshal292004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-[#161819] hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#d97706] dark:hover:text-[#d97706] transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/harshal-malani-592a91279/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-[#161819] hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#d97706] dark:hover:text-[#d97706] transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="mailto:malaniharshal95@gmail.com"
              className="p-3 rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-[#161819] hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#d97706] dark:hover:text-[#d97706] transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* PDF modal rendering */}
      <NewPdfViewer
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </section>
  );
};
