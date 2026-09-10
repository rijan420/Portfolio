import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Projects", label: "Projects" },
  { path: "/Contact", label: "Contact" },
];

function Logo() {
  return (
    <span className="font-semibold tracking-tight text-lg text-white">
      RIJAN <span className="text-blue-500">GAUTAM</span>
    </span>
  );
}

function ResumeButton({ className = "" }) {
  return (
    <a
      href="/Rijan_Gautam_Resume.pdf"
      download
      className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-medium px-4 py-2 rounded-md ${className}`}
    >
      Download Resume <Download size={15} />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-950 border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-white font-medium"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Resume */}
        <div className="hidden md:block">
          <ResumeButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-950 px-5 py-4 flex flex-col gap-3">

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-left text-sm py-1 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-slate-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <ResumeButton className="mt-2 justify-center" />
        </div>
      )}
    </header>
  );
}