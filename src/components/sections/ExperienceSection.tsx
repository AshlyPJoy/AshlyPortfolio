"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { TechBadge } from "@/components/ui/TechBadge";

export function ExperienceSection() {
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-background border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Career Milestone"
          title="Professional Journey"
          subtitle="Proven track record in engineering scalable frontend architectures, complex forms, and enterprise full-stack web applications."
        />

        <div className="max-w-4xl mx-auto">
          {/* Vertical Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-sky-500/30">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
              </div>

              {/* Main Timeline Card */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 hover:border-slate-700 hover:bg-slate-900/80 transition-all shadow-xl">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sky-400 font-mono text-sm font-semibold">
                      <span>{exp.role}</span>
                      <span className="text-slate-500">&bull;</span>
                      <span className="text-slate-300 font-sans text-xs">
                        {exp.experienceYears} in Software Development
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono mt-1">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Key Professional Responsibilities &amp; Contributions
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Applied */}
                <div className="mt-7 pt-5 border-t border-slate-800/80">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    Technologies &amp; Methodologies Leveraged
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="default" size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
