import React, { useState } from 'react';


const projects = [
  {
    id: "vegal",
    title: "V-Egal",
    subtitle: "Real-time communication platform",
    description:
      "A full-stack real-time messaging and communication platform built for secure, ultra-fast, and intuitive peer-to-peer interactions.",
    accent: "#3d4fd6",
    demoUrl: "https://v-egal.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC"],
    githubUrl: "https://github.com/srridar/V-egal",
    features: [
      { title: "Real-time messaging", desc: "Instant 1-to-1 conversations with typing indicators and live delivery via Socket.IO." },
      { title: "Voice & video calling", desc: "WebRTC peer-to-peer audio/video calls with instant call notification management." },
      { title: "Secure authentication", desc: "JWT-based authentication with protected route middleware and session handling." },
      { title: "Media & file sharing", desc: "Inline sharing of images, documents, and media inside active chats." },
    ],
  },
  {
    id: "ehaat",
    title: "E-Haat",
    subtitle: "B2B marketplace for local farmers & transporters",
    description:
      "A B2B e-commerce platform connecting local farmers, buyers, and transport providers. Farmers sell directly, products are recommended by category, distance, and preference, and the most suitable transporter is assigned automatically for delivery.",
    accent: "#2f7d4f",
    metrics: [
      { label: "Architecture", value: "MERN / REST API" },
      { label: "Users", value: "Buyer, Seller, Transporter, Admin" },
      { label: "Recommendation", value: "Category + Distance + Preference" },
    ],
    techStack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary", "JWT"],
    githubUrl: "https://github.com/srridar/E-Haat",
    demoUrl: "https://e-haat.vercel.app/",
    features: [
      { title: "Farmer product management", desc: "Create, update, and manage listings with images, pricing, stock, and category information." },
      { title: "Admin product verification", desc: "Every new product is reviewed by an administrator before buyers can see it." },
      { title: "Smart recommendations", desc: "Category matching, user preferences, and distance filtering promote nearby local sellers." },
      { title: "Automatic transport assignment", desc: "On order, nearby transporters are ranked and sent delivery requests one at a time until one accepts." },
    ],
  },
  {
    id: "porsche",
    title: "Porsche",
    subtitle: "Interactive luxury car showcase",
    description:
      "A Porsche-inspired showcase built with React and TypeScript. A clean, premium interface for exploring models, reading detailed specifications, and switching between vehicles through reusable components and structured data.",
    accent: "#b3261e",
    demoUrl: "https://porsche-web-six.vercel.app/",
    metrics: [
      { label: "Architecture", value: "React + TypeScript" },
      { label: "UI", value: "Responsive / Component-based" },
      { label: "Models", value: "911, Cayenne, Macan and more" },
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React", "React Icons"],
    githubUrl: "https://github.com/srridar/PorscheWeb",
    features: [
      { title: "Model showcase", desc: "Explore the 911, Cayenne, Macan, Panamera, and Taycan through a structured interface." },
      { title: "Detailed specifications", desc: "Typed data for power, torque, performance, drivetrain, and other model-specific details." },
      { title: "Reusable components", desc: "New models and specs can be added without rebuilding the UI." },
      { title: "Electric vehicle data", desc: "Handles electric motor power, combined power, and torque for models like the Taycan." },
    ],
  },
    {
    id: "cornortech",
    title: "Cornor Tech",
    subtitle: "Modern digital solutions and technology company website",
    description:
      "A modern, responsive company website developed to showcase Cornor Tech's digital services, projects, team, and business identity. Built with Next.js and TypeScript, focusing on reusable components, smooth navigation, engaging animations, and a professional user experience.",
    accent: "#7838c8",
    demoUrl: "https://cornertech.vercel.app/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Node.js",
      "Nodemailer",
    ],
    features: [
      {
        title: "Modern company website",
        desc: "Responsive landing pages showcasing the company's identity, services, and digital solutions.",
      },
      {
        title: "Dynamic team showcase",
        desc: "Dedicated team and leadership sections highlighting company members and their roles.",
      },
      {
        title: "Interactive testimonials",
        desc: "Expandable testimonial cards displaying client feedback and professional experiences.",
      },
      {
        title: "Contact & testimonial forms",
        desc: "Integrated API routes and Nodemailer for handling contact inquiries and testimonial submissions.",
      },
    ],
  },
  {
    id: "ict-kalika",
    title: "ICT Kalika",
    subtitle: "Official website for a school-based ICT community",
    description:
      "A modern website developed for ICT Kalika, a technology-focused community founded in 2022 at Kalika Manavgyan Secondary School. The platform represents the club's identity, activities, achievements, members, and initiatives through a clean and responsive digital experience.",
    accent: "#1685b5",
    demoUrl: "https://ict-kalika.vercel.app/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Framer Motion",
    ],
    metrics: [
      { label: "Founded", value: "2022 (2079 BS)" },
      { label: "Community", value: "83+ Active Members" },
      { label: "Activities", value: "50+ Events" },
    ],
    features: [
      {
        title: "Community showcase",
        desc: "Introduces ICT Kalika, its mission, vision, and technology-driven initiatives.",
      },
      {
        title: "Team & leadership",
        desc: "Dedicated sections showcasing executive members, board representatives, and their responsibilities.",
      },
      {
        title: "Events & activities",
        desc: "Highlights community events, workshops, and technology-related activities.",
      },
      {
        title: "Social media integration",
        desc: "Connects visitors with the ICT Kalika community through its social media presence.",
      },
    ],
  },
];

const serif = { fontFamily: "'Fraunces', 'Iowan Old Style', Georgia, serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, Menlo, monospace" };

export default function ProjectSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const project = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section
      id="projects"
      className="px-6 py-24 text-[#504d48]"
      style={{ background: "#f1ece2" }}
    >
      <style>{`
        @keyframes rise { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
        .rise { animation: rise .45s ease-out both }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <header className="mb-16 grid gap-6  pb-10 md:grid-cols-12">
          <h2 className="text-3xl leading-[1.05] md:col-span-6 md:text-4xl">
            Things I&rsquo;ve
            <br />
            actually built.
          </h2>

        </header>

        <div className="grid gap-12 lg:grid-cols-12">

          <nav className="lg:col-span-4" aria-label="Projects">
            <ul className="">
              {projects.map((p, i) => {
                const active = p.id === activeId;
                return (
                  <li key={p.id} className="">
                    <button
                      onClick={() => setActiveId(p.id)}
                      className="group flex w-full items-baseline gap-4 py-5 text-left"
                      aria-current={active}
                    >
                      <span className="flex-1">
                        <span className={`block text-3xl transition-all duration-300 ${active ? "translate-x-2" : "group-hover:translate-x-1"}`}>
                          {p.title}
                        </span>
                        <span className="mt-1 block text-sm text-[#1f1c17]/60">
                          {p.subtitle}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>


          <article key={project.id} className="rise lg:col-span-8 lg:pl-10">
            <p className="mb-4 text-sm text-black ]">
              {project.subtitle}
            </p>

            <p className="max-w-2xl text-xl " style={serif}>
              {project.description}
            </p>

            <ol className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {project.features.map((f, i) => (
                <li key={f.title} className="flex gap-4">
                  <span
                    className="pt-0.5 text-xs"
                    style={{ ...mono, color: project.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#1f1c17]/65">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>


            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[#1f1c17]/20 pt-6">
              <div className="flex flex-wrap items-center gap-2 max-w-md">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#1f1c17]/5 text-[#1f1c17]/80 border border-[#1f1c17]/10"
                    style={mono}
                  >
                    {tech}
                  </span>
                ))}
              </div>


              <div className="flex items-center gap-3">

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#1f1c17] text-white transition-all hover:bg-black/80 hover:scale-[1.02]"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg border border-[#1f1c17]/20 text-[#1f1c17] transition-all hover:border-[#1f1c17]/50 hover:bg-[#1f1c17]/5"
                    style={{ color: project.accent, borderColor: `${project.accent}40` }}
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}