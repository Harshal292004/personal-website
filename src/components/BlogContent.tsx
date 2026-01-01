"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { fira_code, jetbrains_mono ,space_grotesk } from "@/lib/fonts";
import { twMerge } from "tailwind-merge";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div
      className={twMerge(
        "prose prose-lg dark:prose-invert max-w-none",
        "prose-headings:font-black prose-headings:text-black dark:prose-headings:text-white",
        "prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed",
        "prose-a:text-emerald-600 dark:prose-a:text-yellow-400 prose-a:font-bold prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-black dark:prose-strong:text-white prose-strong:font-black",
        "prose-code:text-emerald-700 dark:prose-code:text-yellow-300 prose-code:font-bold",
        "prose-pre:bg-gray-900 dark:prose-pre:bg-zinc-950 prose-pre:border-4 prose-pre:border-black dark:prose-pre:border-white",
        "prose-blockquote:border-l-4 prose-blockquote:border-black dark:prose-blockquote:border-white",
        "prose-blockquote:bg-emerald-50 dark:prose-blockquote:bg-yellow-900/30 prose-blockquote:py-2 prose-blockquote:px-4",
        "prose-ul:list-none prose-ol:list-none",
        "prose-li:border-2 prose-li:border-black dark:prose-li:border-white prose-li:bg-white dark:prose-li:bg-zinc-800",
        "prose-li:py-2 prose-li:px-4 prose-li:mb-2 prose-li:shadow-[3px_3px_0px_0px_rgba(0,0,0)] dark:prose-li:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)]"
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Custom heading styles
          h1: ({ node, ...props }) => (
            <h1
              className={twMerge(
                `${space_grotesk.className} text-4xl md:text-5xl mb-4 mt-8`,
                "border-b-4 border-black dark:border-white pb-2"
              )}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className={twMerge(
                `${jetbrains_mono.className} text-3xl md:text-4xl mb-3 mt-6`,
                "border-b-3 border-black dark:border-white pb-2"
              )}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className={twMerge(
                `${jetbrains_mono.className} text-2xl md:text-3xl mb-2 mt-4`
              )}
              {...props}
            />
          ),
          // Custom code block styles
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline ? (
              <pre
                className={twMerge(
                  `${fira_code.className} p-4 rounded-none overflow-x-auto mb-4`,
                  "border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]"
                )}
              >
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code
                className={twMerge(
                  `${fira_code.className} px-2 py-1 bg-emerald-100 dark:bg-yellow-900/50`,
                  "border-2 border-black dark:border-white font-bold rounded-none"
                )}
                {...props}
              >
                {children}
              </code>
            );
          },
          // Custom image styles
          img: ({ node, src, alt, ...props }: any) => (
            <div className="my-6 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] p-2 bg-white dark:bg-zinc-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full h-auto block"
                {...props}
              />
              {alt && (
                <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-400 font-bold">
                  {alt}
                </p>
              )}
            </div>
          ),
          // Custom blockquote styles
          blockquote: ({ node, ...props }: any) => (
            <blockquote
              className={twMerge(
                "border-l-4 border-black dark:border-white",
                "bg-emerald-50 dark:bg-yellow-900/30 py-3 px-5 my-4",
                "border-2 border-t-2 border-r-2 border-black dark:border-white",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]"
              )}
              {...props}
            />
          ),
          // Custom list item styles
          li: ({ node, ordered, ...props }: any) => (
            <li
              className={twMerge(
                "border-2 border-black dark:border-white",
                "bg-white dark:bg-zinc-800 py-2 px-4 mb-2",
                "shadow-[3px_3px_0px_0px_rgba(0,0,0)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)]",
                "list-none"
              )}
              {...props}
            />
          ),
          // Custom link styles
          a: ({ node, href, ...props }: any) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={twMerge(
                "text-emerald-600 dark:text-yellow-400 font-bold",
                "border-b-2 border-emerald-600 dark:border-yellow-400",
                "hover:bg-emerald-100 dark:hover:bg-yellow-900/30 px-1"
              )}
              {...props}
            />
          ),
          // Custom paragraph styles
          p: ({ node, ...props }: any) => (
            <p
              className={twMerge(
                "mb-4 text-gray-800 dark:text-gray-200 leading-relaxed",
                "text-base md:text-lg"
              )}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

