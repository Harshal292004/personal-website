import React from "react";
import { motion } from "framer-motion";

interface DoodleProps {
  className?: string;
  color?: string;
}

export const Underline = ({ className, color = "currentColor" }: DoodleProps) => {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M5 12C35 4 85 5 120 7C150 9 180 12 195 15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.path
        d="M15 15C50 9 105 10 140 11C165 12 185 13 190 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
};

export const CircleHighlight = ({ className, color = "currentColor" }: DoodleProps) => {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M10 20C10 8 40 4 80 5C110 6 115 15 110 25C102 38 60 38 30 36C12 35 5 28 8 18C10 10 30 8 60 8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export const Arrow = ({ className, color = "currentColor" }: DoodleProps) => {
  return (
    <svg
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Curved Arrow Stem */}
      <motion.path
        d="M5 5C10 20 25 35 45 35"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      {/* Arrow Head Point 1 */}
      <motion.path
        d="M36 28C40 31 44 33 46 35C41 38 37 41 35 44"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
      />
    </svg>
  );
};

export const WavyDivider = ({ className, color = "currentColor" }: DoodleProps) => {
  return (
    <svg
      viewBox="0 0 400 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 6C15 2 28 10 41 6C54 2 67 10 80 6C93 2 106 10 119 6C132 2 145 10 158 6C171 2 184 10 197 6C210 2 223 10 236 6C249 2 262 10 275 6C288 2 301 10 314 6C327 2 340 10 353 6C366 2 379 10 398 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "linear" }}
      />
    </svg>
  );
};
