"use client"
import {motion} from 'framer-motion'
const Triangle = ({ className = "", color = "#FF5722", size = 30,rotation = 0, }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotate: [rotation, rotation + 10, rotation - 10, rotation],
      }}
      transition={{
        duration: 6,
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
          d="M20 0L40 40H0L20 0Z"
          fill={color}
          stroke="black"
          strokeWidth="3"
        />
      </svg>
    </motion.div>
  );
};

export default Triangle;
