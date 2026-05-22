"use client";
import React from "react";
import { PROJECTS } from "@/lib/constants";
import { lora, space_mono, caveat } from "@/lib/fonts";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-[#ebd9c8] dark:border-zinc-800 transition-colors duration-500">
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
            Projects
          </h2>
          <span className="flex-1 h-[1px] bg-dashed border-t border-[#ebd9c8] dark:border-zinc-800" />
          <span className={`${caveat.className} text-xl text-rose-500/70 -rotate-2 select-none`}>
            what I've built
          </span>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => {
            const hasGithub = project.github && project.github.url;
            const hasLive = project.live_demo && project.live_demo.url;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl border border-[#ebd9c8] dark:border-zinc-800/80 bg-[#f9f5ee]/50 dark:bg-zinc-900/30 hover:bg-[#f9f5ee]/80 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className={`${lora.className} text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-[#d97706] transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  {/* Actions */}
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {hasGithub && (
                      <a
                        href={project.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                    )}
                    {hasLive && (
                      <a
                        href={project.live_demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className={`${lora.className} text-zinc-700 dark:text-zinc-300 font-light leading-relaxed mb-6`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${space_mono.className} text-[10px] text-zinc-600 dark:text-zinc-400 border border-[#ebd9c8] dark:border-zinc-800/80 px-2 py-0.5 rounded-md bg-[#f9f5ee]/80 dark:bg-zinc-900/50 select-none`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
