"use client";

import ProjectSection from "@/components/projects/ProjectSection";
import ContactSection from "@/components/contact/ContactSection";
import SkillsSection from "@/components/skill/SkillSection";
import AboutSection from "@/components/about/AboutSection";
import HeroSection from "@/components/hero/HeroSection";


export default function Home() {

  return (
    <div  className="bg-black text-slate-100 font-mono">
      <section id="home" >
         <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactSection/>
      </section>

    </div>
  );
}
