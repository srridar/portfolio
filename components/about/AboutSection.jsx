import React from 'react';
import { Terminal, Code, Cpu, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-750 text-slate-100 font-mono relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            <span className="text-sky-400">&lt;</span>
            About Me
            <span className="text-sky-400">/&gt;</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-sans">
            Developer driven by continuous learning, problem-solving, and web engineering.
          </p>
        </div>

        {/* Main Terminal Window Card */}
        <div className="max-w-3xl mx-auto bg-gray-800 border  rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">

          {/* Terminal Bar */}
          <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="grid grid-cols-2 gap- 0.1 w-6 h-6 items-center">
              <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
              <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
              <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
              <div className="w-2.5 h-2.5 bg-sky-500  hover:opacity-80 transition-opacity" />
            </div>
            <div className="text-xs text-slate-400 font-sans flex items-center gap-1.5">
              <span className='font-semibold text-sky-500'>who am i ?</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3 p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-200">Butwal, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
                <GraduationCap className="w-5 h-5 text-sky-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-200">Butwal Multiple Campus</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="text-xs">
                    <p className="font-semibold text-sky-600 inline-block overflow-hidden whitespace-nowrap border-r-2 border-sky-600 animate-[infiniteTextReveal_4s_ease-in-out_infinite,blink_0.75s_step-end_infinite]">
                      Bachelor's in Computer Science And Information Technology(BSc.CSIT)
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
              <p>
                Hello! I'm <span className="text-sky-400 font-mono font-semibold">Sushil Bhattarai</span>, a developer focused on building modern web software and exploring core programming logic.
              </p>

              <p>
                My development journey includes low-level foundation programming in
                <span className="text-slate-100 font-mono text-xs px-2 m-1 py-0.5 bg-gray-800 rounded-xl border"> C </span>
                and <span className="text-slate-100 font-mono text-xs px-2 m-1 py-0.5 bg-gray-800 rounded-xl border">C++</span>
                alongside modern web standards like
                <span className="text-slate-100 font-mono text-xs px-2 m-1 py-0.5 bg-gray-800 rounded border ">JavaScript</span>
                and <span className="text-slate-100 font-mono text-xs px-2 m-1 py-0.5 bg-gray-800 rounded border ">React</span>.
              </p>

              <p>
                I am actively refining my approach to problem-solving, algorithms, and full-stack architecture, consistently pushing to sharpen my developer toolkit with every project I construct.
              </p>
            </div>

            {/* Core Values / Focus Badges */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-sky-950/40 border border-sky-800/50 rounded-full text-xs text-sky-300 font-mono">
                <Code className="w-3.5 h-3.5" /> Web Development
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-slate-300 font-mono">
                <Cpu className="w-3.5 h-3.5" /> Problem Solving
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}