"use client";
import React from "react";
import { lora, space_mono, caveat } from "@/lib/fonts";
import { Github, Code, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import scrollToSection from "@/lib/scrollSection";
export const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-[#ebd9c8] dark:border-zinc-800 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <h2 className={`${space_mono.className} text-xs font-semibold uppercase tracking-wider text-[#d97706]`}>
            Experience
          </h2>
          <span className="flex-1 h-[1px] bg-dashed border-t border-[#ebd9c8] dark:border-zinc-800" />
          <span className={`${caveat.className} text-xl text-rose-500/70 -rotate-2 select-none`}>
            contributions & experience
          </span>
        </motion.div>

        {/* Timeline Log */}
        <div className="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-dashed before:border-l before:border-[#ebd9c8] dark:before:border-zinc-800">

          {/* Entry 1: Kubeflow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-10"
          >
            {/* Timeline node */}
            <span className="absolute left-1 top-2.5 w-4 h-4 rounded-full border-2 border-[#d97706] bg-[#f9f5ee] dark:bg-zinc-900" />

            <span className={`${space_mono.className} text-[10px] text-zinc-400 dark:text-zinc-500 block mb-2`}>
              Open Source Contribution • 2025
            </span>

            <h3 className={`${lora.className} text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-50 mb-4`}>
              Kubeflow Contributor
            </h3>

            <div className={`${lora.className} text-zinc-700 dark:text-zinc-300 font-light leading-relaxed space-y-3 mb-6`}>
              <p>
                Contributed to the Kubeflow Trainer, merging 4 Pull Requests
              </p>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["GoLang", "Kubernetes", "DevOps", "Cloud Native"].map((tech) => (
                <span
                  key={tech}
                  className={`${space_mono.className} text-[10px] text-zinc-500 border border-[#ebd9c8] dark:border-zinc-800 px-2 py-0.5 rounded-md`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://github.com/kubeflow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#d97706] hover:text-[#b45309] transition-colors"
              >
                <Github size={13} />
                <span>Kubeflow Org</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://github.com/kubeflow/trainer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#d97706] hover:text-[#b45309] transition-colors"
              >
                <Code size={13} />
                <span>Kubeflow Trainer Repo</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>

          {/* Entry 2: Learning & Growth */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-10"
          >
            {/* Timeline node */}
            <span className="absolute left-1 top-2.5 w-4 h-4 rounded-full border-2 border-zinc-300 dark:border-zinc-700 bg-[#f9f5ee] dark:bg-zinc-900" />

            <span className={`${space_mono.className} text-[10px] text-zinc-400 dark:text-zinc-500 block mb-2`}>
              Current Status
            </span>

            <h3 className={`${lora.className} text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-50 mb-4`}>
              Currently Building & Exploring
            </h3>

            <p className={`${lora.className} text-zinc-700 dark:text-zinc-300 font-light leading-relaxed mb-6`}>
              In addition to open source, I spend late nights building projects and exploring different tech.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <button
                onClick={() => scrollToSection({ element_id: "projects" })}
                className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline underline-offset-4 cursor-pointer"
              >
                Browse projects
              </button>
              <button
                onClick={() => scrollToSection({ element_id: "contact" })}
                className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline underline-offset-4 cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
