import React from 'react';
import { Terminal, Code, Cpu, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-750 text-[#3c3939aa] font-mono relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            About Me
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-sans">
            Developer driven by continuous learning, problem-solving, and web engineering.
          </p>
        </div>


        <div className="max-w-3xl mx-auto bg-[#1d1c1c] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">


          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6">
              <div className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-xl">
                <MapPin className="w-5 h-5  shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-500">Butwal, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-950/60  rounded-xl">
                <GraduationCap className="w-5 h-5  shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-500">Butwal Multiple Campus</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="text-xs">
                    <p className="font-semibold text-slate-600 inline-block overflow-hidden whitespace-nowrap  animate-[infiniteTextReveal_4s_ease-in-out_infinite,blink_0.75s_step-end_infinite]">
                      Bachelor's in Computer Science And Information Technology(BSc.CSIT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-500 font-sans">
              <p>
                <span className="font-mono font-semibold text-slate-400"> Sushil Bhattarai </span>
                , a developer who enjoys turning ideas into useful and simple web
                experiences.
              </p>

              <p>
                I started with the fundamentals, learning{" "}
                <span className="inline-block text-slate-100 font-mono text-xs px-2 py-0.5 mx-1 ">
                  C
                </span>
                and{" "}
                <span className="inline-block text-slate-100 font-mono text-xs px-2 py-0.5 mx-1 ">
                  C++
                </span>
                , and gradually moved into web development with{" "}
                <span className="inline-block text-slate-100 font-mono text-xs px-2 py-0.5 mx-1 ">
                  JavaScript
                </span>
                and{" "}
                <span className="inline-block text-slate-100 font-mono text-xs px-2 py-0.5 mx-1">
                  React
                </span>
                . I enjoy understanding how things work rather than just making
                something that looks good.
              </p>

              <p>
                Right now, I'm focused on becoming a better full-stack developer,
                improving my problem-solving skills, and building projects that
                challenge me to learn something new along the way.
              </p>
            </div>
 
            <div className="pt-4 flex flex-wrap gap-3">
              <span className='text-yellow-50
              '> Core skill</span>
              <div className="flex items-center gap-2 px-3.5 py-1.5   rounded-full text-xs text-sky-300 font-mono">
               Web Development
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}