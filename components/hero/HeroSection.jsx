import React from 'react';
import Image from 'next/image';
import { ArrowRight, Terminal, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-16 lg:py-0  text-slate-100 flex items-center justify-center font-mono relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1  rounded-full text-xs text-gray-400">
            <span>Open to Web Development Projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-emerald-400">Sushil</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-semibold text-slate-300">
            <span>Full-Stack Web Developer & Coder</span>
          </div>

          {/* Narrative Paragraph */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
            I craft responsive web applications and real-time platforms with modern React frameworks. Focused on clean system design, algorithmic problem solving, and seamless user experiences.
          </p>

          {/* Call-To-Action & Social Links */}
          <div className="pt-2 flex flex-col flex-wrap items-start justify-center lg:justify-start gap-4">
            <div className="inline-flex items-center gap-2  py-1  rounded-full text-xs text-gray-400">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>

              <Button
                asChild
                className="bg-emerald-300 text-slate-950 hover:bg-emerald-400 font-bold px-4 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95 text-sm"
              >
                <a
                  href="/documents/Sushil_Bhattarai_Resume.pdf"
                  download="Sushil_Bhattarai_Resume.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>


            <div className="flex items-center gap-2">
              <a
                href="https://github.com/srridar"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushil-bhattarai-650995298/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Profile Image Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-300" />

            {/* Profile Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
              <Image
                src="/porfile.jpg"
                alt="Sushil Bhattarai Profile"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-2 right-2 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-3 rounded-xl flex items-center gap-2.5 shadow-xl">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <div className="text-xs">
                <p className="text-slate-400 font-sans">Primary Tech</p>
                <p className="font-bold text-white">React / Next.js</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}