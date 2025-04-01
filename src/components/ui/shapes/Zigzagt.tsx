"use client"
import {motion} from 'framer-motion'

const Zigzag = ({ className = "", width = 100, color = "#000" }) => (
    <motion.div 
        className={`absolute ${className}`}
        animate={{
            x: [0, 5, 0, -5, 0],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
        }}
    >
        <svg width={width} height="20" viewBox={`0 0 ${width} 20`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d={`M0 10 L${width/10} 2 L${width/5} 18 L${3*width/10} 2 L${2*width/5} 18 L${width/2} 2 L${3*width/5} 18 L${7*width/10} 2 L${4*width/5} 18 L${9*width/10} 2 L${width} 10`}
                stroke={color} 
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    </motion.div>
);


export default Zigzag