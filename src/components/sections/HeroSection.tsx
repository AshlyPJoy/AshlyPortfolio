"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileDown,
  Mail,
  CheckCircle2,
  Globe2,
  Terminal,
  Code2,
  Sparkles,
  Layers,
  ChevronDown,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SystemArchitectureVisual } from "@/components/ui/SystemArchitectureVisual";
import { TechBadge } from "@/components/ui/TechBadge";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Background Glowing Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial gradients */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-sky-600/5 rounded-full blur-3xl" />

        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hero */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-medium text-sky-300">
                {PORTFOLIO_DATA.personal.availability.badgeText}
              </span>
            </motion.div>

            {/* Main Greeting and Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-sm sm:text-base font-mono text-sky-400 font-semibold tracking-wide uppercase block mb-1">
                Engineering Scalable Systems
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-sky-400">.</span>
              </h1>
            </motion.div>

            {/* Professional Title & Supporting Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3"
            >
              <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 font-mono text-base sm:text-lg font-bold mb-3">
                {PORTFOLIO_DATA.personal.title}
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight leading-snug">
                {PORTFOLIO_DATA.personal.headline}
              </h2>
            </motion.div>

            {/* Exact Description from Prompt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              {PORTFOLIO_DATA.personal.tagline}
            </motion.p>

            {/* Core Capability Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>4+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Frontend &amp; Backend Development</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-sky-300">
                <Code2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>React | Next.js | Angular | Node.js</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PORTFOLIO_DATA.personal.contact.resumeUrl}
                download="Ashly_P_Joy_FullStack_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-mono font-medium text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-850 border border-transparent hover:border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Abstract Technical Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <SystemArchitectureVisual />
          </motion.div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors text-xs font-mono"
            aria-label="Scroll down to About section"
          >
            <span>Explore Engineering Profile</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
