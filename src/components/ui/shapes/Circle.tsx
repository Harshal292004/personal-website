"use client";
import { motion } from "framer-motion";
const Circle = ({ className = "", color = "#FFA726", size = 20 }) => {
  return (
    <motion.div
      className={`absolute rounded-full border-4 border-black ${className}`}
      style={{ width: size, height: size, backgroundColor: color }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default Circle;
