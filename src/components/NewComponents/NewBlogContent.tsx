"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { lora, space_mono } from "@/lib/fonts";
import { twMerge } from "tailwind-merge";

interface NewBlogContentProps {
  content: string;
}

export default function NewBlogContent({ content }: NewBlogContentProps) {
  return (
    <div
      className={twMerge(
        "prose prose-lg dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200 selection:bg-[#ebd9c8] dark:selection:bg-zinc-800",
        "prose-headings:font-normal prose-headings:text-zinc-900 dark:prose-headings:text-zinc-50",
        "prose-p:leading-relaxed prose-p:mb-6",
        "prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50 prose-strong:font-semibold",
        "prose-a:text-[#d97706] prose-a:underline prose-a:underline-offset-4 hover:text-[#b45309] transition-colors",
        "prose-blockquote:border-l-2 prose-blockquote:border-[#d97706] prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:my-8 prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400",
        "prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6",
        "prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6",
        "prose-li:mb-2 prose-li:pl-1",
        "prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 overflow-x-auto",
        "prose-code:text-[#d97706] prose-code:text-sm prose-code:font-mono",
        "prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800 my-10",
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
                `${lora.className} text-3xl md:text-4xl mb-6 mt-10 font-normal`,
              )}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className={twMerge(
                `${lora.className} text-2xl md:text-3xl mb-4 mt-8 font-normal`,
              )}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className={twMerge(
                `${lora.className} text-xl md:text-2xl mb-3 mt-6 font-normal`,
              )}
              {...props}
            />
          ),
          // Custom code block styles
          code: ({ node, inline, className, children, ...props }: any) => {
            return !inline ? (
              <pre className="overflow-x-auto p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <code
                  className={twMerge(
                    `${space_mono.className} text-xs text-zinc-800 dark:text-zinc-300`,
                    className,
                  )}
                  {...props}
                >
                  {children}
                </code>
              </pre>
            ) : (
              <code
                className={`${space_mono.className} px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-[#d97706] rounded`}
                {...props}
              >
                {children}
              </code>
            );
          },
          // Custom image styles
          img: ({ node, src, alt, ...props }: any) => (
            <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900 p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full h-auto block rounded-xl max-h-[450px] object-cover"
                {...props}
              />
              {alt && (
                <p className="text-xs text-center mt-3 text-zinc-400 dark:text-zinc-500 font-mono">
                  {alt}
                </p>
              )}
            </div>
          ),
          // Custom blockquote styles
          blockquote: ({ node, ...props }: any) => (
            <blockquote
              className="border-l-2 border-[#d97706] italic pl-6 my-8 text-zinc-600 dark:text-zinc-400"
              {...props}
            />
          ),
          // Custom list styles
          li: ({ node, ...props }: any) => (
            <li className="mb-2 pl-1" {...props} />
          ),
          // Custom paragraph styles
          p: ({ node, ...props }: any) => (
            <p
              className={twMerge(
                `${lora.className} mb-6 text-zinc-800 dark:text-zinc-200 leading-relaxed font-light text-base md:text-lg`,
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
