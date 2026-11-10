"use client";

import React from "react";
import { ArrowRight, FileDown, Mail, CheckCircle2, Globe2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

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
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 flex flex-col justify-center items-center text-center overflow-hidden bg-background"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[20rem] bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-mono font-medium text-sky-300">
            {PORTFOLIO_DATA.personal.availability.badgeText}
          </span>
        </div>

        {/* Main Greeting & Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="text-sky-400">.</span>
        </h1>

        {/* Professional Title */}
        <div className="mt-4 inline-block px-3.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 font-mono text-sm sm:text-base font-bold tracking-wide">
          {PORTFOLIO_DATA.personal.title} &bull; 4+ Years Experience
        </div>

        {/* Supporting Headline */}
        <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight max-w-2xl leading-snug">
          {PORTFOLIO_DATA.personal.headline}
        </h2>

        {/* Description */}
        <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
          {PORTFOLIO_DATA.personal.tagline}
        </p>

        {/* Core Stack Pills */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-xs font-mono text-slate-300 max-w-2xl">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
            Developer Analyst @ ULTS
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-sky-300">
            React &bull; Next.js &bull; Angular
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-emerald-300">
            Node.js &bull; NestJS &bull; PostgreSQL &bull; Prisma
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-md shadow-sky-500/20"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={PORTFOLIO_DATA.personal.contact.resumeUrl}
            download="Ashly_P_Joy_FullStack_Developer_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-mono font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <FileDown className="w-4 h-4 text-sky-400" />
            <span>Resume (PDF)</span>
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
}
