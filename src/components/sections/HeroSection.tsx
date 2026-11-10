"use client";

import React from "react";
import { ArrowRight, FileDown, Mail, Phone, ExternalLink } from "lucide-react";
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
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 flex flex-col justify-center overflow-hidden bg-background"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl flex flex-col justify-center text-left">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-sky-500/20 bg-sky-500/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono font-medium text-sky-300">
              {PORTFOLIO_DATA.personal.availability.badgeText}
            </span>
          </div>

          {/* Main Greeting and Name */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-sky-400">.</span>
          </h1>

          {/* Professional Title */}
          <div className="mt-3 text-sky-400 font-mono text-lg sm:text-xl font-bold">
            {PORTFOLIO_DATA.personal.title}
          </div>

          {/* Supporting Headline */}
          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight leading-snug">
            {PORTFOLIO_DATA.personal.headline}
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
            {PORTFOLIO_DATA.personal.tagline}
          </p>

          {/* Key Quick Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-300">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              4+ Years Professional Experience
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              Developer Analyst @ ULTS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-400">
              React &bull; Next.js &bull; Angular &bull; Node.js &bull; NestJS &bull; PostgreSQL
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
