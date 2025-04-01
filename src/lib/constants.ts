import { ELinkState, EState } from "./types";
import type { ITextProps } from "./types";
import { pixelify_sans, silkscreen,space_mono,fira_code,space_grotesk,jetbrains_mono } from "./fonts";

// languages import
import python from "@/lib/techstack/languages/python.svg";
import go from "@/lib/techstack/languages/go.svg";
import js from "@/lib/techstack/languages/javascript.svg";
import ts from "@/lib/techstack/languages/typescript.svg";

// frameworks
import langgraph from "@/lib/techstack/frameworks/langgraph.svg";
import nextjs from "@/lib/techstack/frameworks/nextdotjs.svg";
import reactjs from "@/lib/techstack/frameworks/react.svg";
import nodejs from "@/lib/techstack/frameworks/nodedotjs.svg";

// databases
import mongodb from "@/lib/techstack/frameworks/mongodb.svg";

// Tools
import archlinux from "@/lib/techstack/tools/archlinux.svg";
import docker from "@/lib/techstack/tools/docker.svg";
import git from "@/lib/techstack/tools/git.svg";
import k8s from "@/lib/techstack/tools/kubernetes.svg";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "/software-memes", label: "SW Memes" },
  { href: "/software-reads", label: "SW Reads" },
  { href: "/blogs", label: "Blogs" }, // Make sure this is a full URL if external
];

const FUN_FACTS = [
  {
    state: EState.FACT,
    msg: " I use ARCH btw",
  },
  {
    state: EState.FACT,
    msg: " I don't know how it works!!",
  },
  {
    state: EState.ERROR,
    msg: " ERROR 404: sleep not found",
  },
  {
    state: EState.WARNINGS,
    msg: " WARNINGS: Machine started to unlearn ;)",
  },
  {
    state: EState.ERROR,
    msg: " ERROR 504: panic() yoou interacted with an introvert",
  },
  {
    state: EState.FACT,
    msg: " I love cats <3",
  },
];

// Additional error/warning messages that can randomly appear
const RANDOM_MESSAGES = [
  {
    state: EState.ERROR,
    msg: " ERROR 444: Segmentation fault (core dumped)",
  },
  {
    state: EState.WARNINGS,
    msg: " WARNINGS: Low caffeine levels detected",
  },
  {
    state: EState.ERROR,
    msg: " ERROR 404: Keyboard not responding. Pressed CTRL+C & CTRL+VVVVVVV",
  },
  {
    state:EState.WARNINGS,
    msg: " WARNINGS: System overheating. Consider touching grass",
  },
];


const GREETINGS:ITextProps[]=[
  {
    text:'Bonjour!',
    style:` ${space_mono.className} text-green-400`,
    cursorStyle:'bg-green-400'
  }
  ,
  {
    text:'Hola',
    style:` ${space_grotesk.className} text-blue-400`,
    cursorStyle:'bg-blue-400'
  },
  {
    text:'Hello',
    style:`${fira_code.className} text-yellow-400`,
    cursorStyle:'bg-yellow-400'
  },
  {
    text:'Namaste!',
    style:`${jetbrains_mono.className} text-pink-400`,
    cursorStyle:'bg-pink-400'
  },
  {
    text:   'Hie',
    style: `${pixelify_sans.className} text-emerald-400`,
    cursorStyle:'bg-emerald-400'
  }
]


const STATE_STYLES  = {
  [EState.ERROR]: {
    textClass: "text-red-500 font-bold",
    font: silkscreen
  },
  [EState.WARNINGS]: {
    textClass: "text-yellow-500",
    font: pixelify_sans
  },
  [EState.FACT]: {
    textClass: "text-green-400",
    font: silkscreen
  },
};



const LANGUAGES= [
  { text: "Python", svg: python },
  { text: "GoLang", svg: go },
  { text: "JavaScript", svg: js },
  { text: "TypeScript", svg: ts },
];

const FRAMEWORKS  = [
  { text: "Next.JS", svg: nextjs },
  { text: "React.js", svg: reactjs },
  { text: "Node.js", svg: nodejs },
  { text: "LangGraph", svg: langgraph },
];

const DATABASES = [{ text: "MongoDB", svg: mongodb }];

const TOOLS = [
  { text: "Arch Linux", svg: archlinux },
  { text: "Docker", svg: docker },
  { text: "Git", svg: git },
  { text: "Kubernetes", svg: k8s },
];


const PROGRAMMING_ITEMS = [
  "{ code && coffee }",
  "sudo pacman -Syu",
  "<div>Hello World</div>",
  "git commit -m 'fix: everything'",
  "function recursion() { return recursion(); }",
  "i3wm + polybar",
  "neofetch",
  "vim > emacs",
  "while true; do echo 'coding'; done",
  "const life = 'code';",
  "yay -S aur-package",
  "/usr/bin/bash",
  "ls -la ~/.config",
  "systemctl restart mind.service",
  "import React from 'react'",
  "arch btw"
];


const PROJECTS = [
  {
    title: "AI-Research Analyzer",
    description:
      "Developed an AI-driven system for research paper evaluation with 100% classification accuracy. Implemented conference recommendation logic with 60% accuracy, analyzing 150+ papers with detailed reports.",
    tags: [
      "Langchain",
      "Groq",
      "Streamlit",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    github: {
      url: "https://github.com/Harshal292004/KGPDSH",
      state:ELinkState.ACTIVE,
    },
    live_demo: { url: "", state: ELinkState.INACTIVE },
    isRightAligned: false,
  },
  {
    title: "Side",
    description:
      "SaaS platform that enables influencers to automate direct messages and audience interactions using AI-driven workflows. Integrated custom automation rules, NLP-based message generation, and webhook triggers.",
    tags: ["Next.js", "TypeScript", "Webhooks", "Prisma", "PostgreSQL"],
    github: {
      url: "https://github.com/Harshal292004/side",
      state: ELinkState.ACTIVE,
    },
    live_demo: { url: "", state: ELinkState.INACTIVE },
    isRightAligned: true,
  },
  {
    title: "Virtual Mouse",
    description:
      "AI-driven gesture-based control system using OpenCV and Mediapipe, allowing users to interact with their monitor through virtual inputs. Enables functionalities like cursor movement, clicks, and scrolling.",
    tags: ["CrewAI", "Groq", "Llama-3.1(8b)", "OpenCV", "MediaPipe"],
    github: {
      url: "https://github.com/Harshal292004/virtual-mouse",
      state: ELinkState.ACTIVE,
    },
    live_demo: { url: "", state: ELinkState.INACTIVE },
    isRightAligned: false,
  },
  {
    title: "Research Hub",
    description:
      "An innovative agentic platform where LLMs conduct expert-level research and generate academic papers from simple prompts. Enables seamless publication to a centralized hub.",
    tags: ["CrewAI"],
    github: {
      url: "https://github.com/Harshal292004/resarch-agent-hub",
      state: ELinkState.ACTIVE,
    },
    live_demo: { url: "", state: ELinkState.INACTIVE },
    isRightAligned: true,
  },
  {
    title: "Ground Water Level Analysis",
    description:
      "Analyzed European ground water level patterns using time series models like ARIMA and SARIMAX. Worked with large datasets for predictive analytics.",
    tags: ["TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: { url: "", state: ELinkState.INACTIVE },
    live_demo: { url: "", state: ELinkState.INACTIVE },
    isRightAligned: false,
  },
  {
    title: "Virtual Painter",
    description:
      "Developed a virtual painter allowing users to draw and paint over a virtual canvas using Mediapipe's solutions and OpenCV.",
    tags: ["Mediapipe", "OpenCV", "NumPy"],
    github: {
      url: "https://github.com/Harshal292004/virtual-Painter",
      state: ELinkState.ACTIVE,
    },
    live_demo: { url: "", state: ELinkState.INACTIVE },
    isRightAligned: true,
  },
];


export { LINKS,FUN_FACTS,RANDOM_MESSAGES ,GREETINGS,STATE_STYLES,LANGUAGES,FRAMEWORKS,DATABASES,TOOLS ,PROGRAMMING_ITEMS,PROJECTS};
