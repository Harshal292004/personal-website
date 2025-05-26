"use client";
import { motion } from "framer-motion";

const Square = ({ className = "", color = "#FF5722", size = 30 }) => (
  <motion.div
    className={`absolute border-4 border-black ${className}`}
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      transform: "rotate(15deg)",
    }}
    animate={{
      rotate: [15, 25, 5, 15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

export default Square;
