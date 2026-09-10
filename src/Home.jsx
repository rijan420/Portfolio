import React from "react";
import profileImg from "./assets/profile-left.png";
import profile from "./assets/1.jpg"; 
import {
  Download,
  ArrowRight,
  FileCode2,
  Paintbrush,
  Braces,
  Atom,
  Wind,
  GitBranch,
  PenTool,
  GraduationCap,
  Sparkles,
  Layout,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TECH_STACK = [
  { name: "HTML", icon: FileCode2, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "CSS", icon: Paintbrush, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "JavaScript", icon: Braces, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "React", icon: Atom, color: "text-sky-400", bg: "bg-sky-50" },
  { name: "Tailwind CSS", icon: Wind, color: "text-cyan-500", bg: "bg-cyan-50" },
  { name: "Git", icon: GitBranch, color: "text-red-500", bg: "bg-red-50" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-800", bg: "bg-slate-100" },
  { name: "Figma", icon: PenTool, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "UI/UX Design", icon: Layout, color: "text-indigo-500", bg: "bg-indigo-50" },
];

const PROJECTS = [
  {
    title: "E-Voting System",
    tags: ["React", "Tailwind", "JavaScript"],
    desc: "A web-based voting system designed to simplify the voting process with a secure and user-friendly interface.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Portfolio Website",
    tags: ["React", "Tailwind"],
    desc: "A personal responsive portfolio built using React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Task Manager App",
    tags: ["React", "Firebase"],
    desc: "A simple and clean task manager app with add, edit, delete and local storage features.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
  },
];

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-blue-600 bg-blue-50/80 border border-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
      <span>👋</span> {children}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-44 bg-slate-100 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-900 text-base">{project.title}</h3>

        <div className="flex gap-1.5 mt-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mt-3 flex-1">
          {project.desc}
        </p>

        <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            View Project <ArrowRight size={12} />
          </Link>

          <a
            href="https://github.com/rijan420"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-800 transition-colors"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-slate-800 font-sans">
     {/* HERO SECTION */}
     <section className="bg-gray-300 text-white min-h-[calc(100vh-64px)] flex items-center pt-0 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>HELLO, I'M</SectionEyebrow>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Rijan <span className="text-blue-600">Gautam</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mt-2">
              BIT Student &amp; Aspiring Web Developer
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed mt-4 max-w-md">
              I'm a BIT student passionate about building clean, responsive and user-friendly web experiences. I love turning ideas into reality through code and design.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all"
              >
                View My Projects <ArrowRight size={14} />
              </Link>

              <a
                href="/Rijan_Gautam_Resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
              >
                Download Resume <Download size={14} />
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8 text-slate-600">
              <a href="https://github.com/rijan420" className="p-2 bg-white rounded-full border border-slate-200 shadow-sm hover:text-blue-600 transition-colors">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/rijan-gautam-a48548343/" className="p-2 bg-white rounded-full border border-slate-200 shadow-sm hover:text-blue-600 transition-colors">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.instagram.com/reezangautam/" className="p-2 bg-white rounded-full border border-slate-200 shadow-sm hover:text-blue-600 transition-colors">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

         {/* RIGHT IMAGE WITH LARGER BLOB & SIZE */}
          <div className="relative flex justify-center items-end min-h-[460px] sm:min-h-[520px]">
            {/* Larger Background SVG Blob */}
            <div className="absolute inset-0 flex items-center justify-center -z-0">
              <svg className="w-[100%] h-[100%] text-blue-100/70 fill-current scale-110" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.7,-56.4C58.8,-45.6,71.8,-32.3,75.6,-16.5C79.4,-0.7,74,17.6,64.8,32.7C55.6,47.8,42.6,59.7,27.1,66.3C11.6,72.9,-6.4,74.2,-23.1,68.6C-39.8,63,-55.2,50.5,-63.9,34.5C-72.6,18.5,-74.6,-1,-70.1,-18.2C-65.6,-35.4,-54.6,-50.3,-40.4,-61.1C-26.2,-71.9,-8.8,-78.6,4.8,-84.3C18.4,-90,30.6,-67.2,44.7,-56.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Expanded Cutout Image */}
            <img
        src={profileImg}
        alt="Rijan Gautam"
        className="relative z-10 max-h-[420px] md:max-h-[500px] w-auto object-contain block -mb-1"
      />
          </div>
        </div>
      </section>
      {/* TECH STACK */}
      <section className="bg-white max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-xl font-bold text-slate-900">What I Work With</h2>
        <p className="text-xs text-slate-500 mt-1">
          Technologies and tools I use to build amazing things.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
          {TECH_STACK.map(({ name, icon: Icon, color, bg }) => (
            <div
              key={name}
              className="bg-white border border-slate-200/80 rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow transition-shadow"
            >
              <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center`}>
                <Icon size={20} className={color} />
              </div>
              <span className="text-xs font-semibold text-slate-700">{name}</span>
            </div>
          ))}
        </div>
      </section>

  {/* ABOUT PREVIEW */}
      <section className="bg-slate-50/50 border-y border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-xs font-bold text-zinc-950 tracking-wider uppercase mb-3">
            About Me <span className="text-zinc-950 font-normal">(preview)</span>
          </h2>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm grid md:grid-cols-[220px_1fr] gap-8 items-center">
            {/* LEFT IMAGE CONTAINER */}
            <div className="w-full h-56 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm">
              <img 
                src={profile} 
                alt="Rijan Gautam" 
                className="w-full h-full object-contain object-bottom" 
              />
            </div>

            <div className="grid lg:grid-cols-[1fr_240px] gap-6 items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">About Me</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  I'm Rijan, a Bachelor of Information Technology student at MMAMC Campus. I enjoy building web applications, exploring UI/UX design and constantly learning new technologies.
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg mt-5 shadow-sm transition-all"
                >
                  Learn More About Me <ArrowRight size={13} />
                </Link>
              </div>

              <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Education</p>
                    <p className="text-[11px] text-slate-500">BIT – MMAMC Campus</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="text-blue-600 mt-0.5 shrink-0" size={16} />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Currently</p>
                    <p className="text-[11px] text-slate-500">6th Semester</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-center">
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">5+</p>
                    <p className="text-[10px] text-slate-500 font-medium">Projects</p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">6th</p>
                    <p className="text-[10px] text-slate-500 font-medium">Semester</p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">05+</p>
                    <p className="text-[10px] text-slate-500 font-medium">Techs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Some of my recent work. Take a look at what I've built so far.
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            View All Projects <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-[#0B132B] mt-12 py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-base font-bold">Have a project in mind?</h3>
            <p className="text-slate-400 text-xs mt-1">Let's build something amazing together.</p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Get In Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}