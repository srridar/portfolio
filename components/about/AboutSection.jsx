import React from 'react';
import { Terminal, Code, Cpu, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="pt-10 py-5 bg-gray-750 text-black font-mono relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight  flex items-center justify-center gap-2">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mt-2 font-semibold">
            Developer driven by continuous learning, problem-solving, and web engineering.
          </p>
        </div>


        <div className="max-w-3xl mx-auto rounded-2xl shadow overflow-hidden backdrop-blur-sm">

          <div className="p-4 sm:p-8 space-y-4">
            <div className="grid grid-cols-1  gap-4 pb-6">
              <div className="flex items-center gap-2 w-fit p-3 bg-white  rounded">
                <GraduationCap className="w-5 h-5  shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold ">Butwal Multiple Campus</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="text-sm">
                    <p className="font-semibold inline-block overflow-hidden whitespace-nowrap  animate-[infiniteTextReveal_4s_ease-in-out_infinite,blink_0.75s_step-end_infinite]">
                      Bachelor's in Computer Science And Information Technology(BSc.CSIT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm sm:text-base   font-sans">
              <p>A developer who enjoys turning ideas into useful and simple web experiences. </p>

              <p>
                I started with the fundamentals, learning{" "}
                <span className=" text-[#055983] font-mono text-xl px-1 py-0.5 ">
                  C
                </span>
                and{" "}
                <span className=" text-[#055983] font-mono text-xl px-1 py-0.5  ">
                  C++
                </span>
                , and gradually moved into web development with{" "}
                <span className="inline-block text-[#055983] font-mono text-xl px-1 py-0.5  ">
                  JavaScript
                </span>
                and{" "}
                <span className="inline-block text-[#055983] font-mono text-xl px-1 py-0.5  ">
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
 
            <div className="pt-4 flex flex-wrap gap-3 items-center">
              <span className=''> Core skill</span> <div className='w-3 h-[1px] bg-white'></div>
              <div className="flex items-center text-sm font-semibold text-sky-800">
               Web Development
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}