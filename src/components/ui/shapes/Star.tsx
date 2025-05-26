"use client";
import { motion } from "framer-motion";
const Star = ({ className = "", color = "#43A047", size = 40 }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0L25.2447 14.7553L40 20L25.2447 25.2447L20 40L14.7553 25.2447L0 20L14.7553 14.7553L20 0Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
};

export default Star;
