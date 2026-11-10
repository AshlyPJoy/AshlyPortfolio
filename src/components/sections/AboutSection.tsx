"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Sparkles,
  Server,
  Zap,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Workflow,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function AboutSection() {
  const highlights = [
    {
      title: "4+ Years of Experience",
      metric: "4+ YRS",
      description:
        "Extensive professional experience developing enterprise-grade, high-availability web applications and scalable digital solutions.",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      accentColor: "from-sky-500/20 to-sky-500/0",
    },
    {
      title: "Frontend & Backend Expertise",
      metric: "FULL STACK",
      description:
        "Seamless end-to-end execution bridging reactive client frameworks (React, Next.js, Angular) with robust server APIs (Node.js, NestJS).",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      accentColor: "from-indigo-500/20 to-indigo-500/0",
    },
    {
      title: "Modern Web Application Development",
      metric: "MODERN ARCH",
      description:
        "Committed to clean architecture, modular component-driven design, predictable state management, and optimized user performance.",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      accentColor: "from-emerald-500/20 to-emerald-500/0",
    },
  ];

  const engineeringPrinciples = [
    {
      title: "Reusable Component Systems",
      desc: "Atomic, decoupled UI components built for design system consistency and rapid feature delivery.",
    },
    {
      title: "Complex Forms & Validation",
      desc: "Type-safe schemas, dynamic conditional inputs, and instant user feedback across data workflows.",
    },
    {
      title: "Interactive Dashboards",
      desc: "High-density data tables, sorting, filtering, and real-time visualization with zero UI lag.",
    },
    {
      title: "Resilient API Integration",
      desc: "Robust HTTP client pipelines with interceptors, token refresh, and structured error boundaries.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Profile"
          title="About Me"
          subtitle="Delivering reliable, scalable, and responsive software solutions with a focus on code quality and user experience."
        />

        {/* 3 Core Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-7 hover:border-slate-700 transition-all group overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${h.accentColor}`}
              />
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {h.icon}
                </div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700/60">
                  {h.metric}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                {h.title}
              </h3>
              <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Narrative bio */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 leading-relaxed text-base">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
              <Code className="w-4 h-4" />
              <span>Full Stack Development Narrative</span>
            </div>

            {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Responsive &amp; Mobile-First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>TypeScript Strict</span>
              </div>
            </div>
          </div>

          {/* Technical Focus Grid */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block px-1">
              Core Engineering Focus
            </span>
            {engineeringPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-sky-500/30 transition-colors"
              >
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
