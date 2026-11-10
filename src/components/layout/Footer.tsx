"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">{PORTFOLIO_DATA.personal.name}</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-slate-400">{PORTFOLIO_DATA.personal.title}</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-slate-500 font-mono">4+ Years</span>
        </div>

        {/* Socials & Top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
            className="hover:text-sky-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <span className="text-slate-700">|</span>

          <span>&copy; {currentYear} Ashly P Joy</span>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
            title="Back to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
