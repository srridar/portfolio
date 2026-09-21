import React, { useState } from 'react';
import {
  Github,
  MessageSquare,
  Video,
  ShieldCheck,
  FileUp,
  Activity,
  Smartphone,
  ShoppingBag,
  Store,
  Image as ImageIcon,
  Truck,
  MapPin,
  Users,
  Car,
  Gauge,
  Layers,
  Zap,
  Palette,
} from "lucide-react";

const projects = [
  {
    id: 'vegal',
    title: 'V-Egal',
    subtitle: 'Modern Real-Time Communication Platform',
    description: 'A full-stack real-time messaging and communication platform built for secure, ultra-fast, and intuitive peer-to-peer interactions.',
    metrics: [
      { label: 'Latency', value: '<100ms' },
      { label: 'Protocols', value: 'WebRTC / WSS' },
      { label: 'Security', value: 'JWT Auth' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'WebRTC'],
    liveUrl: '#',
    githubUrl: 'https://github.com/srridar/V-egal',
    features: [
      { icon: MessageSquare, title: 'Real-Time Messaging', desc: 'Instant 1-to-1 conversations with typing indicators and live delivery via Socket.IO.' },
      { icon: Video, title: 'Voice & Video Calling', desc: 'WebRTC peer-to-peer audio/video calls with instant call notification management.' },
      { icon: ShieldCheck, title: 'Secure Authentication', desc: 'JWT-based authentication with protected route middleware and session handling.' },
      { icon: FileUp, title: 'Media & File Sharing', desc: 'Seamless inline sharing of images, documents, and media inside active chats.' },
      { icon: Activity, title: 'User Presence Engine', desc: 'Live online/offline status detection with activity state broadcasts.' },
      { icon: Smartphone, title: 'Adaptive Interface', desc: 'Fully responsive UI optimized for desktop and high-density mobile viewports.' },
    ],
  },
  {
  id: "ehaat",
  title: "E-Haat",
  subtitle: "B2B Marketplace for Local Farmers & Transporters",
  description: "A B2B e-commerce platform connecting local farmers, buyers, and transport providers. The system helps farmers sell products directly, recommends products based on category, distance, and user preferences, and automatically assigns the most suitable transporter for order delivery.",
  metrics: [
    { label: "Architecture", value: "MERN / REST API" },
    { label: "Users", value: "Buyer , Seller ,Transporter , Admin" },
    { label: "Recommendation", value: "Category + Distance + Preference" },
  ],
  techStack: [
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Cloudinary",
    "JWT",
  ],

  liveUrl: "#",
  githubUrl: "https://github.com/srridar/E-Haat",
  features: [
    {
      icon: Store,
      title: "Farmer Product Management",
      desc: "Farmers can create, update, and manage product listings with images, pricing, stock, and category information."
    },
    {
      icon: ShieldCheck,
      title: "Admin Product Verification",
      desc: "Every newly listed product is reviewed by an administrator before becoming visible to buyers, ensuring quality and authenticity."
    },
    {
      icon: ShoppingBag,
      title: "Smart Product Recommendations",
      desc: "Products are recommended using category matching, user preferences, and distance-based filtering to promote nearby local sellers."
    },
    {
      icon: Truck,
      title: "Automatic Transport Assignment",
      desc: "When an order is placed, the system ranks nearby transporters and automatically sends delivery requests one at a time until one accepts."
    },
    {
      icon: MapPin,
      title: "Location-Based Marketplace",
      desc: "Buyers can discover products from nearby farmers, reducing delivery distance and encouraging local agricultural trade."
    },
    {
      icon: Users,
      title: "Role-Based Platform",
      desc: "Separate dashboards and permissions for Buyers, Sellers, Transporters, and Admins with JWT-based authentication and authorization."
    },
  ],
},
{
  id: "porsche",
  title: "Porsche",
  subtitle: "Interactive Luxury Car Showcase",
  description:
    "A Porsche-inspired car showcase website built with React and TypeScript. The project focuses on creating a clean, premium interface where users can explore different Porsche models, view detailed specifications, and switch between vehicle information through reusable components and structured car data.",

  metrics: [
    { label: "Architecture", value: "React + TypeScript" },
    { label: "UI", value: "Responsive / Component-Based" },
    { label: "Models", value: "911 / Cayenne / Macan....." },
  ],

  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Lucide React",
    "React Icons",
  ],

  liveUrl: "#",
  githubUrl: "https://github.com/srridar/PorscheWeb",

  features: [
    {
      icon: Car,
      title: "Porsche Model Showcase",
      desc:
        "Explore different Porsche models including the 911, Cayenne, Macan, Panamera, and Taycan through a structured and interactive interface.",
    },
    {
      icon: Gauge,
      title: "Detailed Car Specifications",
      desc:
        "Each vehicle is backed by structured TypeScript data containing specifications such as power, torque, performance, drivetrain, and other model-specific details.",
    },
    {
      icon: Layers,
      title: "Reusable Components",
      desc:
        "The interface is built with reusable React components and shared data structures so new vehicle models and specifications can be added without rebuilding the UI.",
    },
    {
      icon: Zap,
      title: "Electric Vehicle Data",
      desc:
        "The project also handles detailed electric vehicle specifications such as electric motor power, combined power, and torque for models like the Taycan.",
    },
    {
      icon: Smartphone,
      title: "Responsive Interface",
      desc:
        "The layout adapts across desktop, tablet, and mobile screen sizes while maintaining the visual style of a premium automotive website.",
    },
    {
      icon: Palette,
      title: "Premium Automotive UI",
      desc:
        "A minimal, image-focused interface inspired by modern automotive websites, with emphasis on typography, vehicle imagery, spacing, and clean interactions.",
    },
  ],
},
];



export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState('vegal');
  const selectedProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <section id="projects" className="py-20 bg-gray-750 text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">

          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight"> Featured Projects </h3>
          <p className="mt-4 text-slate-400 text-base">
            Architecting robust web applications with modern technology stacks, focusing on real-time systems and scalable commerce platforms.
          </p>
        </div>

  
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5  border border-slate-800 rounded-xl">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === project.id
                    ? 'bg-slate-600 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>


        <div className=" border border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono px-3 py-1 bg-gray-950 text-slate-400 rounded-md">
                  Featured Application
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-white mt-3"> {selectedProject.title} </h4>
                <p className="text-slate-500 font-medium text-sm mt-1"> {selectedProject.subtitle} </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">  {selectedProject.description} </p>

              <div className="grid grid-cols-3 gap-3 py-4 ">
                {selectedProject.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs text-slate-500 font-medium">{metric.label}</p>
                    <p className="text-xs font-semibold text-slate-200 mt-2">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3"> Technologies Used </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800/80 text-slate-300 px-3 py-1 rounded-md border border-slate-700/50 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

  
              <div className="flex items-center gap-4 pt-2">
                {/* <a
                  href={selectedProject.liveUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors"
                >
                  Live Preview <ExternalLink className="w-4 h-4" />
                </a> */}
                <a
                  href={selectedProject.githubUrl}
                  className="inline-flex items-center justify-center p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

   
            <div className="lg:col-span-7">
              <h5 className="text-xs font-semibold text-slate-400  tracking-wider mb-4">
                Core Engineering Features
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-[#181818] border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors"
                    >
                      <div className="p-2 w-fit  rounded-lg text-slate-700 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h6 className="text-sm font-semibold text-slate-100">{feature.title}</h6>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}