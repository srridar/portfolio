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
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-sans max-w-xl mx-auto">
            Technologies, languages, and frameworks I leverage to build scalable web applications and real-time systems.
          </p>
        </div>


        <div className="space-y-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx}  className=" rounded-2xl p-4 sm:p-7 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 pb-3">
                <h3 className="text-xl font-semibold text-slate-500 tracking-wide">
                  {cat.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}
                    className="flex flex-col items-center justify-center p-3 bg-gray-950/80  rounded-xl  hover:bg-gray-900 transition-all duration-300 group"
                  >
                    <div className="relative w-8 h-8 sm:w-14 sm:h-14 mb-3 flex items-center justify-center">
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="object-contain max-h-full rounded-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-gray-400 transition-colors">
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