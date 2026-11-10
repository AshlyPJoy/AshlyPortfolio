"use client";

import React from "react";
import { ArrowRight, FileDown, Mail, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { SystemArchitectureVisual } from "@/components/ui/SystemArchitectureVisual";

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
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 flex flex-col justify-center overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typographic Hero */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-sky-500/20 bg-sky-500/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-medium text-sky-300">
                {PORTFOLIO_DATA.personal.availability.badgeText}
              </span>
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-sky-400">.</span>
            </h1>

            {/* Professional Title & Supporting Headline */}
            <div className="mt-2 text-sky-400 font-mono text-base sm:text-lg font-bold">
              {PORTFOLIO_DATA.personal.title}
            </div>

            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-200 tracking-tight leading-snug">
              {PORTFOLIO_DATA.personal.headline}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* Highlights row */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                4+ Years Experience
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Frontend &amp; Backend
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400">
                React · Next.js · Angular · Node.js
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-md shadow-sky-500/20"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PORTFOLIO_DATA.personal.contact.resumeUrl}
                download="Ashly_P_Joy_FullStack_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Abstract Visual */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <SystemArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
