"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Marquee from "@/components/ui/Marquee";
import Experience from "@/components/Experience";
import RandomDev from "@/components/ui/RandomDev";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoadingScreen from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={100}></LoadingScreen>
      ) : (
        <>
          <Header id="#header"></Header>
          <Hero id="home" />
          <TechStack id="techstack" />
          <Marquee />
          <Projects id="projects" />
          <RandomDev />
          <Experience id="experience" />
          <Footer id="#footer" />
        </>
      )}
    </>
  );
}
