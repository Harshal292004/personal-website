"use client";
import { motion } from "framer-motion";
import { jetbrains_mono, fira_code, space_mono } from "@/lib/fonts";
import { QuoteIcon } from "@radix-ui/react-icons";
import useGetRadomDevQuotes from "@/lib/hooks/useGetRadomDevQuotes";
import Pulsar from "./shapes/Plusar";
import Zigzag from "./shapes/Zigzagt";
import { useTheme } from "next-themes";

const RandomDev = () => {
  const { quote, isLoading } = useGetRadomDevQuotes();
  const { theme } = useTheme();

  return (
    <div className="w-full py-8 md:py-16 relative bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-zinc-900 border-y-4 md:border-y-8 border-black dark:border-gray-200 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${theme === "dark" ? "#EAB308" : "#fb923c"} 0, ${theme === "dark" ? "#EAB308" : "#fb923c"} 1px, transparent 1px, transparent 10px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative elements */}
      <Pulsar
        size={40}
        color={theme === "dark" ? "#EAB308" : "#fdba74"}
        className="top-8 left-8 md:top-12 md:left-16"
      />
      <Pulsar
        size={30}
        color={theme === "dark" ? "#FACC15" : "#fb923c"}
        className="bottom-8 right-8 md:bottom-12 md:right-24"
      />
      <Zigzag
        className="top-16 right-16 md:top-24 md:right-48"
        width={100}
        color={theme === "dark" ? "#CA8A04" : "#f97316"}
      />
      <Zigzag
        className="bottom-12 left-12 md:bottom-20 md:left-32"
        width={80}
        color={theme === "dark" ? "#A1A1AA" : "#000000"}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {isLoading ? (
            <div className="py-12 flex justify-center items-center">
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 border-6 md:border-8 border-orange-400 dark:border-yellow-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : (
            quote && (
              <motion.div
                className="border-4 md:border-8 border-black dark:border-gray-200 bg-white dark:bg-zinc-800 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(234,179,8,0.6)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0)] md:dark:shadow-[12px_12px_0px_0px_rgba(234,179,8,0.6)] p-4 md:p-8 relative"
                initial={{ rotate: -2 }}
                animate={{
                  rotate: [-2, 1, -1, 2, -2],
                  y: [0, -5, 0, -3, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {/* Decorative corner */}
                <div className="absolute w-12 h-12 md:w-16 md:h-16 -right-4 -bottom-4 md:-right-8 md:-bottom-8 transform rotate-45 border-4 md:border-8 border-black dark:border-gray-200 bg-orange-400 dark:bg-yellow-600"></div>

                {/* Top decoration */}
                <div className="h-6 md:h-8 w-full border-b-2 md:border-b-4 border-black dark:border-gray-200 bg-amber-400 dark:bg-yellow-700 absolute top-0 left-0">
                  <div className="flex gap-1 md:gap-2 h-full items-center ml-2 md:ml-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 dark:bg-red-400 border border-black dark:border-gray-200"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 dark:bg-yellow-400 border border-black dark:border-gray-200"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 dark:bg-green-400 border border-black dark:border-gray-200"></div>
                    <span
                      className={`${space_mono.className} text-[10px] md:text-xs ml-1 md:ml-2 text-black dark:text-gray-100`}
                    >
                      DEVELOPER_WISDOM.js
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-6 md:mt-8 mb-1 md:mb-2">
                  <div className="w-10 h-8 md:w-16 md:h-12 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <QuoteIcon className="w-6 h-6 md:w-10 md:h-10 text-orange-500 dark:text-yellow-500" />
                    </div>
                  </div>
                </div>

                <blockquote className="text-center mb-2 md:mb-4">
                  <p
                    className={`${fira_code.className} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 dark:text-gray-100`}
                  >
                    "{quote.text}"
                  </p>
                  <footer
                    className={`${jetbrains_mono.className} text-sm md:text-lg dark:text-gray-100`}
                  >
                    <motion.span
                      className="inline-block px-2 py-1 md:px-4 md:py-1 bg-orange-400 dark:bg-yellow-600 border-2 md:border-3 border-black dark:border-gray-200 transform -rotate-1"
                      whileHover={{
                        rotate: [-1, 2, -2, 1, -1],
                        scale: 1.05,
                        transition: { duration: 0.5 },
                      }}
                    >
                      — {quote.author}
                    </motion.span>
                  </footer>
                </blockquote>

                <motion.div
                  className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 bg-amber-300 dark:bg-yellow-500 border-2 md:border-4 border-black dark:border-gray-200 z-10 rotate-12"
                  animate={{ rotate: [12, 24, 12, 0, 12] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RandomDev;
