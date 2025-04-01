"use client"
import { TECHSTACK_CONTAINER_VARIANTS, TECHSTACK_ITEMS_VARIANTS, TECHSTACK_TITLE_VARIANTS } from "@/lib/variants";
import { fira_code, jetbrains_mono} from "@/lib/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ITech } from "@/lib/types";
import { useTheme } from "next-themes";

const TechSection = ({ title, items, isRightAligned}:{title:string, items:ITech[], isRightAligned:Boolean}) => {
    const { theme } = useTheme();
    
    // Header color mapping for both light and dark modes
    const headerColorLight = title === "Languages" ? "bg-emerald-500" : 
                          title === "Frameworks" ? "bg-orange-400" : 
                          title === "Tools" ? "bg-blue-400" : "bg-purple-400";
                          
    const headerColorDark = title === "Languages" ? "bg-emerald-600" : 
                          title === "Frameworks" ? "bg-yellow-500" : 
                          title === "Tools" ? "bg-zinc-700" : "bg-zinc-600";
    
    const headerColor = `${headerColorLight} dark:${headerColorDark}`;
    
    // Making container responsive with appropriate spacing
    const containerClass = `relative flex flex-col ${isRightAligned ? 'md:flex-row-reverse' : 'md:flex-row'} 
                           items-center justify-center w-full mb-8 md:mb-12 overflow-hidden gap-4 md:gap-6`;
    
    // Item hover animation
    const itemHoverAnimation = {
      scale: 1.05,
      transition: { duration: 0.2 }
    };
    
    return (
      <motion.div 
        className={containerClass}
        variants={TECHSTACK_CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header with responsive sizing */}
        <motion.div 
          className={`${headerColor} border-8 border-black dark:border-zinc-200 shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] 
                      p-3 sm:p-4 md:p-6 m-2 sm:m-3 md:m-4 lg:m-6
                      transform hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] 
                      hover:translate-x-1 hover:translate-y-1 transition-all z-10
                      w-full md:w-1/4 text-center`}
          variants={TECHSTACK_TITLE_VARIANTS}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={`${jetbrains_mono.className} text-3xl sm:text-4xl md:text-5xl text-black dark:text-zinc-100`}>
            {title}
          </h2>
        </motion.div>
  
        {/* Tech Items Container - made responsive with flexbox */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-full md:w-3/4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`p-3 sm:p-4 border-4 border-black dark:border-zinc-300 shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)]
                         bg-emerald-50 dark:bg-zinc-800
                         hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)]
                         transform hover:translate-x-1 hover:translate-y-1 transition-all
                         flex flex-col items-center justify-center
                         w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36`}
              variants={TECHSTACK_ITEMS_VARIANTS}
              whileHover={itemHoverAnimation}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 flex justify-center items-center">
                <Image 
                  src={item.svg} 
                  alt={`${item.text} icon`} 
                  width={48}
                  height={48}
                  className={`object-contain ${theme === "dark" ? "filter invert-[0.8]" : ""}`}
                />
              </div>
              <span className={`${fira_code.className} text-xs sm:text-sm md:text-base text-center dark:text-yellow-300`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

export default TechSection;