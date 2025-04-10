import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Marquee from "@/components/ui/Marquee";
import Experience from "@/components/Experience";
import RandomDev from "@/components/ui/RandomDev";

export default function Home() {
  return (
    <>
      <Hero id="home" />
      <TechStack id="techstack" />
      <Marquee />
      <Projects id="projects" />
      <RandomDev />
      <Experience id="experience" />
    </>
  );
}
