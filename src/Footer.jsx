import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <span className="font-semibold tracking-tight text-lg text-white">
      RIJAN <span className="text-blue-500">GAUTAM</span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 text-slate-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div>
          <Link to="/">
            <Logo />
          </Link>

          <p className="text-xs mt-1 text-slate-500">
            BIT Student · Aspiring Web Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/rijan420" aria-label="GitHub">
            <FaGithub
              size={17}
              className="hover:text-white transition-colors cursor-pointer"
            />
          </a>

          <a href="https://www.linkedin.com/in/rijan-gautam-a48548343/" aria-label="LinkedIn">
            <FaLinkedin
              size={17}
              className="hover:text-white transition-colors cursor-pointer"
            />
          </a>

          <a href="https://www.instagram.com/reezangautam/" aria-label="Instagram">
            <FaInstagram
              size={17}
              className="hover:text-white transition-colors cursor-pointer"
            />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © 2026 Rijan Gautam. All rights reserved.
        </p>

      </div>
    </footer>
  );
}