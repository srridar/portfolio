import React from 'react';
import Image from 'next/image';
import { ArrowRight, Terminal, Github, Linkedin, Code2 } from 'lucide-react';
import {  Atom, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-16 lg:py-0  text-[#848282aa] flex items-center justify-center font-mono relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1  rounded-full text-xs text-gray-400">
            <span>Open to Web Development Projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-[#aaaa]">Sushil</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-semibold ">
            <span>Full-Stack Web Developer & Coder</span>
          </div>

          <p className=" text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
            I build responsive web applications and real-time platforms with modern React frameworks. Focused on clean system design, algorithmic problem solving, and seamless user experiences.
          </p>


          <div className="pt-2 flex flex-col flex-wrap items-start justify-center lg:justify-start gap-4">
            <div className="inline-flex items-center gap-2  py-1  rounded-full text-xs text-gray-400">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-slate-950 font-bold rounded-lg text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 active:scale-95"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>

              <Button
                asChild
                className=" text-slate-950 bg-gray-500 hover:bg-gray-600 font-bold px-4 py-2.5 rounded-lg transition-all duration-200 shadow-lg  text-sm"
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
                className="p-3 bg-[#302d2d] hover:bg-[#565555]  text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushil-bhattarai-650995298/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#302d2d] hover:bg-[#565555]  text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>


        <div className="lg:col-span-5 flex justify-center items-center py-10">
          <div className="relative group flex items-center justify-center">
            <div className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border border-sky-500/20 animate-[spin_20s_linear_infinite]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-sky-500/40 p-2 rounded-full shadow-lg shadow-sky-500/20">
                <Atom className="w-5 h-5 text-[#e3cfcf] animate-[spin_10s_linear_infinite_reverse]" />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-teal-500/40 p-2 rounded-full shadow-lg shadow-teal-500/20">
                <Terminal className="w-5 h-5 text-[#e3cfcf] animate-[spin_10s_linear_infinite_reverse]" />
              </div>
            </div>


            <div className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full border border-dashed border-gray-500/30 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-slate-900 border border-sky-400/40 p-2 rounded-full shadow-lg shadow-sky-400/20">
                <Cpu className="w-5 h-5 text-[#e3cfcf] animate-[spin_15s_linear_infinite]" />
              </div>
            </div>


            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-300" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
              <Image
                src="/porfile.jpg"
                alt="Sushil Bhattarai Profile"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-2 right-2 z-10   backdrop-blur-md p-3 rounded-xl flex items-center gap-2.5 shadow-xl">
              <Code2 className="w-5 h-5 text-gray-300" />
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