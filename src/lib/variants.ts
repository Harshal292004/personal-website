import type { Variants } from "framer-motion";
const NAVBAR_VARIANTS: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const LOGO_VARIANTS: Variants = {
  hover: {
    rotate: 0,
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Animation variants
const TECHSTACK_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TECHSTACK_ITEMS_VARIANTS: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const TECHSTACK_TITLE_VARIANTS: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

// Animation variants
const PROJECTS_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PROJECT_ITEM_VARIANTS = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const PROJECT_BUTTON_VARIANTS = {
  rest: { scale: 1, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" },
  hover: {
    scale: 1.01,
    boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
    translateX: "3px",
    translateY: "3px",
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)",
    translateX: "4px",
    translateY: "4px",
  },
};

const PROJECT_TAG_VARIANTS = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
};

const ICON_HOVER = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.3 },
  },
};

// Stagger animation for loading text letters
const LETTER_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// Pulse animation for shapes
const PLUSE_VARIANTS = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const PROGRESS_BAR_VARIANT=({progress}:{progress:number})=>{
  const P_VARIANT = {
    initial: { width: "0%" },
    animate: { 
      width: `${progress}%`,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      }
    },
  };
  return P_VARIANT
}
const FILTER_BUTTON_VARIANTS = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};


const EMOJI_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

export {
  NAVBAR_VARIANTS,
  LOGO_VARIANTS,
  CONTAINER_VARIANTS,
  ITEM_VARIANTS,
  TECHSTACK_CONTAINER_VARIANTS,
  TECHSTACK_ITEMS_VARIANTS,
  TECHSTACK_TITLE_VARIANTS,
  PROJECTS_CONTAINER_VARIANTS,
  PROJECT_ITEM_VARIANTS,
  PROJECT_BUTTON_VARIANTS,
  PROJECT_TAG_VARIANTS,
  ICON_HOVER,
  LETTER_VARIANTS,
  PLUSE_VARIANTS,
  FILTER_BUTTON_VARIANTS,
  EMOJI_VARIANTS,
  PROGRESS_BAR_VARIANT
};
