import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Code2, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "E-Voting System",
    tags: ["React", "Tailwind", "JavaScript"],
    desc: "A web-based voting system designed to simplify the voting process with a secure and user-friendly interface.",
    category: "React",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Portfolio Website",
    tags: ["React", "Tailwind"],
    desc: "A personal responsive portfolio built using React and Tailwind CSS.",
    category: "React",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Task Manager App",
    tags: ["React", "Firebase"],
    desc: "A simple and clean task manager app with add, edit, delete and local storage features.",
    category: "React",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Weather App",
    tags: ["JavaScript", "HTML", "CSS"],
    desc: "A weather app that shows real-time weather data using a public API.",
    category: "JavaScript",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
  },
];

const FILTERS = ["All", "React", "JavaScript", "UI/UX"];

function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
      {/* CARD IMAGE THUMBNAIL */}
      <div className="h-44 bg-slate-900 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-base tracking-tight">
          {project.title}
        </h3>

        {/* TAGS */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-xs text-slate-500 leading-relaxed mt-3 flex-1">
          {project.desc}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-2.5 mt-5">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-2xs flex items-center justify-center gap-1.5">
            Live Demo
          </button>

            <a href="https://github.com/rijan420">
          <button className="flex items-center justify-center gap-1.5 border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-semibold px-3 py-2.5 rounded-lg text-slate-700">

            <FaGithub size={13} />
            GitHub
          </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        {/* SECTION HEADER */}
        <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
          <span>🙋‍♂️</span> MY WORK
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          My Projects
        </h1>

        <p className="text-slate-500 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
          Here are some of the projects I've built while learning and experimenting with web technologies.
        </p>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 mt-6">
          {FILTERS.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`text-xs font-semibold px-5 py-2 rounded-full transition-all ${
                filter === filterName
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60"
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          {/* COMING SOON CARD */}
          <div className="bg-[#0b1329] border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-center p-8 min-h-[340px] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-4">
              <Code2 className="text-blue-400" size={22} />
            </div>

            <p className="text-white font-bold text-base tracking-tight">
              More Projects<br />Coming Soon!
            </p>

            <p className="text-slate-400 text-xs mt-2 max-w-[200px] leading-relaxed">
              I'm currently working on more exciting projects. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}