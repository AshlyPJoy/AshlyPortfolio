"use client";

import React from "react";
import { Sparkles, Layers, Zap, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function AboutSection() {
  const highlights = [
    {
      title: "4+ Years of Experience",
      metric: "4+ Years",
      description: "Building responsive, scalable, and user-friendly web applications in production environments.",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "Frontend & Backend Expertise",
      metric: "Full Stack",
      description: "Modern frontend architectures (React, Next.js, Angular) paired with robust APIs (Node.js, NestJS).",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Modern Web Application Development",
      metric: "Modern Web",
      description: "Writing clean, maintainable code with reusable UI components, complex forms, and interactive dashboards.",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-slate-950/30 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About"
          title="About Me"
          subtitle="Delivering reliable, performant, and maintainable software with clean code and modern engineering practices."
        />

        {/* 3 Core Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  {h.icon}
                </div>
                <span className="font-mono text-xs font-semibold text-sky-400">
                  {h.metric}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                {h.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative bio */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Reusable UI Components
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Complex Forms with Validation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Interactive Dashboards &amp; Data Tables
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              REST API &amp; State Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
