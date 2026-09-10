import React from "react";
import { Download, GraduationCap, Layout, Wrench, Sparkles } from "lucide-react";
import profileImg from "./assets/profile-left.png";
import profile from "./assets/1.jpg";

const SKILLS = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code", "Figma"],
  learning: ["UI/UX Design", "Advanced React"],
};

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-slate-800/80 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide border border-slate-700/50">
      <span>🎓</span> {children}
    </div>
  );
}

function ResumeButton() {
  return (
    <a
      href="/Rijan_Gautam_Resume.pdf"
      download
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm"
    >
      Download Resume
      <Download size={14} />
    </a>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-white border border-slate-100/80 rounded-xl p-6 text-center shadow-xs">
      <p className="text-2xl font-bold text-slate-900">
        {value}
      </p>
      <p className="text-xs text-slate-500 font-medium mt-1">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* HERO SECTION */}
      <section className="bg-[#0b1329] text-white pt-4 md:pt-6 pb-0 border-b border-slate-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto pl-6 sm:pl-10 pr-0 grid md:grid-cols-2 gap-6 items-end">
          
          {/* LEFT CONTENT (Reduced top padding) */}
          <div className="py-4 md:py-8 self-center">
            <SectionEyebrow>GET TO KNOW ME</SectionEyebrow>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              About Me
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              I'm Rijan, a BIT student with a passion for web development and UI/UX design. I enjoy creating simple, clean and meaningful digital experiences.
            </p>

            <div className="mt-6">
              <ResumeButton />
            </div>
          </div>

          {/* RIGHT HERO IMAGE (Pushed to absolute right edge) */}
          <div className="relative flex justify-end items-end self-end w-full pr-0">
            {/* Background Soft Glow */}
            <div className="absolute inset-0 flex items-center justify-end -z-0">
              <div className="w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Cutout Image */}
            <img
              src={profile}
              alt="Rijan Gautam"
              className="relative z-10 h-[480px] sm:h-[540px] md:h-[620px] w-auto object-contain block -mb-1"
            />
          </div>

        </div>
      </section>

      {/* SKILLS + EDUCATION SECTION */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        {/* SKILLS */}
        <h2 className="text-2xl font-bold text-slate-900">
          My Skills
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Tools and technologies I work with and am currently learning.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {/* FRONTEND CARD */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Layout size={18} />
              </div>
              <p className="font-semibold text-sm text-slate-900">
                Frontend
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs font-medium text-slate-600">
              {SKILLS.frontend.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* TOOLS CARD */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Wrench size={18} />
              </div>
              <p className="font-semibold text-sm text-slate-900">
                Tools
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs font-medium text-slate-600">
              {SKILLS.tools.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* CURRENTLY LEARNING CARD */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <p className="font-semibold text-sm text-slate-900">
                Currently Learning
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-3 text-xs font-medium text-slate-600">
              {SKILLS.learning.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <h2 className="text-2xl font-bold text-slate-900 mt-16">
          Education
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          My academic journey so far.
        </p>

        <div className="bg-white border border-slate-100 rounded-xl p-6 mt-6 shadow-xs flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap size={16} />
            </div>
            <p className="text-xs font-bold text-slate-700">
              2024 – Present
            </p>
          </div>

          <div className="flex-1 sm:pl-6 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0">
            <p className="font-bold text-sm text-slate-900">
              Bachelor of Information Technology
            </p>
            <p className="text-xs text-slate-500 mt-1">
              MMAMC University
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Currently: 6th Semester
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <StatCard value="5+" label="Projects Completed" />
          <StatCard value="6th" label="Semester" />
          <StatCard value="5+" label="Technologies Learned" />
        </div>
      </section>
    </div>
  );
}