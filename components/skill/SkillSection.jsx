import React from 'react';
import Image from 'next/image';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', src: '/c-lan.jpg' },
      { name: 'C++', src: '/cpp.jpg' },
      { name: 'JavaScript', src: '/JavaScript-Symbol.png' },
      { name: 'TypeScript', src: '/ts.png' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', src: '/html.png' },
      { name: 'CSS3', src: '/Css.png' },
      { name: 'JavaScript', src: '/JavaScript-Symbol.png' },
      { name: 'React', src: '/react.png' },
      { name: 'Next.js', src: '/Next js.png' },
      { name: 'Tailwind CSS', src: '/tailwind.jpg' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', src: '/Node.png' },
      { name: 'Express.js', src: '/ExpressJs.png' },
      { name: 'MongoDB', src: '/mongodb.jpg' },
      { name: 'PostgreSQL', src: '/postgresql.png' },
      { name: 'Prisma', src: '/prisma.jpg' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [

      { name: 'GitHub', src: '/github.png' },
      { name: 'Docker', src: '/docker.png' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skill" className="py-20 text-slate-100 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            <span className="text-sky-400">&lt;</span>
            Technical Skills
            <span className="text-sky-400">/&gt;</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-sans max-w-xl mx-auto">
            Technologies, languages, and frameworks I leverage to build scalable web applications and real-time systems.
          </p>
        </div>

        {/* Categories Container */}
        <div className="space-y-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className=" border border-slate-800/80 rounded-2xl p-4 sm:p-7 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <span className="text-sky-400 font-bold text-lg">*</span>
                <h3 className="text-xl font-semibold text-slate-200 tracking-wide">
                  {cat.category}
                </h3>
              </div>

              {/* Grid Layout for Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center justify-center p-4 bg-gray-950/80 border border-slate-800 rounded-xl hover:border-sky-500/50 hover:bg-gray-900 transition-all duration-300 group"
                  >
                    <div className="relative w-10 h-10 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="object-contain max-h-full rounded-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-sky-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}