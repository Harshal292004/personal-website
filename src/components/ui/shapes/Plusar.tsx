"use client";
import { motion } from "framer-motion";

const Pulsar = ({ className = "", color = "#fb923c", size = 30 }) => (
  <motion.div
    className={`absolute rounded-full border-4 border-black ${className}`}
    style={{ width: size, height: size, backgroundColor: color }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

export default Pulsar;
