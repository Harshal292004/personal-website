import type { Metadata } from "next";
import { Navbar } from "@/components/NewComponents/Navbar";
import { Hero } from "@/components/NewComponents/Hero";
import { Projects } from "@/components/NewComponents/Projects";
import { Experience } from "@/components/NewComponents/Experience";
import { Contact } from "@/components/NewComponents/Contact";

export const metadata: Metadata = {
  title: "Harshal Malani",
  description: "My portfolio",
  icons: {
    icon: "/new_favicon.svg",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5ee] dark:bg-[#161819] text-zinc-800 dark:text-zinc-200 transition-colors duration-500 selection:bg-[#ebd9c8] dark:selection:bg-zinc-800 relative">
      <Navbar />
      <main className="max-w-6xl mx-auto pb-12">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Handcrafted footer */}
      <footer className="py-12 border-t border-[#ebd9c8] dark:border-zinc-800 text-center text-xs font-mono text-zinc-400 dark:text-zinc-500">
        <div>Harshal Malani © 2026</div>
        <div className="mt-1 text-[10px]">Built with Next.js, Framer Motion & Coffee ☕</div>
      </footer>
    </div>
  );
}
