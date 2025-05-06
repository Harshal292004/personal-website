import { ELinkState, EState } from "./types";
import type { ITextProps } from "./types";
import {
  pixelify_sans,
  silkscreen,
  space_mono,
  fira_code,
  space_grotesk,
  jetbrains_mono,
} from "./fonts";
import { TMemeCategory } from "./types";
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

// Memes
import cat_backpropogation from '@/lib/memes/cat_backpropogation.jpg'
import cpp_cat from '@/lib/memes/cpp_cat.jpg'
import energy from '@/lib/memes/energy.jpg'
import football_sudo from '@/lib/memes/football_sudo.jpg'
import four_year_cat from '@/lib/memes/four_year_cat.jpg'
import happy_code from '@/lib/memes/happy_code.jpg'
import I_dont_know from '@/lib/memes/I_dont_know.jpg'
import new_error from '@/lib/memes/new_error.jpg'
import old_code from '@/lib/memes/old_code.jpg'
import refactor_beaver from '@/lib/memes/refactor_beaver.jpg'
import run_as_admin from '@/lib/memes/run_as_admin.jpg'
import stance from '@/lib/memes/stance.jpg'
import usr_bin_cat from '@/lib/memes/usr_bin_cat.jpg'

const MEMES = [
  { alt: "cat_backpropogation", meme: cat_backpropogation, credits: "Hacking Articles", category: "cat"},
  { alt: "cpp_cat", meme: cpp_cat, credits: "Hacking Articles", category:"cat"},
  { alt: "energy", meme: energy, credits: "Hacking Articles", category:"miscellaneous"},
  { alt: "football_sudo", meme: football_sudo, credits: "Hacking Articles", href: "",category:"linux" },
  { alt: "four_year_cat", meme: four_year_cat, credits: "Hacking Articles", category:"cat"},
  { alt: "happy_code", meme: happy_code, credits: "Hacking Articles", category:"miscellaneous"},
  { alt: "I_dont_know", meme: I_dont_know, credits: "Hacking Articles", category:"code"},
  { alt: "new_error", meme: new_error, credits: "Hacking Articles", category:"error"},
  { alt: "old_code", meme: old_code, credits: "Geeks For Geeks", href: "", category:"code" },
  { alt: "refactor_beaver", meme: refactor_beaver, credits: "Hacking Articles", href: "",category:"code" },
  { alt: "run_as_admin", meme: run_as_admin, credits: "Hacking Articles", category:"linux"},
  { alt: "stance", meme: stance, credits: "Hacking Articles", category:"miscellaneous"},
  { alt: "usr_bin_cat", meme: usr_bin_cat, credits: "Hacking Articles", href: "",category:"cat" },
]



const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "/software-memes", label: "My S/W Memes" },
  { href: "/software-reads", label: "My S/W Reads" },
  { href: "/blogs", label: "Blogs" },
];

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "/software-memes", label: "My S/W Memes" },
  { href: "/software-reads", label: "My S/W Reads" },
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
    state: EState.WARNINGS,
    msg: " WARNINGS: System overheating. Consider touching grass",
  },
];

const GREETINGS: ITextProps[] = [
  {
    text: "Bonjour!",
    style: ` ${space_mono.className} text-green-400`,
    cursorStyle: "bg-green-400",
  },
  {
    text: "Hola",
    style: ` ${space_grotesk.className} text-blue-400`,
    cursorStyle: "bg-blue-400",
  },
  {
    text: "Hello",
    style: `${fira_code.className} text-yellow-400`,
    cursorStyle: "bg-yellow-400",
  },
  {
    text: "Namaste!",
    style: `${jetbrains_mono.className} text-pink-400`,
    cursorStyle: "bg-pink-400",
  },
  {
    text: "Hie",
    style: `${pixelify_sans.className} text-emerald-400`,
    cursorStyle: "bg-emerald-400",
  },
];

const STATE_STYLES = {
  [EState.ERROR]: {
    textClass: "text-red-500 font-bold",
    font: silkscreen.className,
  },
  [EState.WARNINGS]: {
    textClass: "text-yellow-500",
    font: pixelify_sans.className,
  },
  [EState.FACT]: {
    textClass: "text-green-400",
    font: silkscreen.className,
  },
};

const LANGUAGES = [
  { text: "Python", svg: python },
  { text: "GoLang", svg: go },
  { text: "JavaScript", svg: js },
  { text: "TypeScript", svg: ts },
];

const FRAMEWORKS = [
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
  "arch btw",
];

const PROJECTS = [
  {
    title:"Open Deep Research",
    description: "Inspired by Perplexity AI's deep research , I wanted to build an open, modular version focused on agentic graph execution and LLM-tool integration. Open Deep Research replicates that flow using LangGraph and multiple toolchains, with a focus on flexibility and observability.",
    tags:[
      "Langchain",
      "LangGraph",
      "Groq",
      "Together.ai"
    ],
    github:{
      url: "https://github.com/Harshal292004/deep_research",
      state:ELinkState.ACTIVE
    },
    live_demo:{url:"https://www.linkedin.com/posts/harshal-malani-592a91279_just-wrapped-up-building-open-deep-research-activity-7325229201509253120-tjWm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEP4Kv4BKo1HjugKwyA0S5DjQjZ6ceM7rpc",state:ELinkState.ACTIVE},
    isRightAligned:true,
  },
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
      state: ELinkState.ACTIVE,
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


const CATEGORY_EMOJIS: Record<TMemeCategory, string> = {
  cat: "😺",
  code: "👨‍💻",
  error: "🐛",
  linux: "🐧",
  miscellaneous: "🎭"
};



export {
  LINKS,
  FUN_FACTS,
  RANDOM_MESSAGES,
  GREETINGS,
  STATE_STYLES,
  LANGUAGES,
  FRAMEWORKS,
  DATABASES,
  TOOLS,
  PROGRAMMING_ITEMS,
  PROJECTS,
  QUICK_LINKS,
  MEMES,
  CATEGORY_EMOJIS
};
