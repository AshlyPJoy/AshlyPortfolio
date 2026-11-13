"use client";

import React from "react";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { TechBadge } from "@/components/ui/TechBadge";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 bg-background border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Experience"
          title="Professional Journey"
          subtitle="4+ years of progressive software development experience building scalable enterprise web systems."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-5 sm:p-6 space-y-3.5 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-sky-400 shrink-0" />
                      {exp.company}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-sky-400 font-semibold mt-0.5">
                      {exp.role} &bull; <span className="text-slate-400 font-sans">{exp.location}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Contributions:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-sky-400 mt-0.5 shrink-0">&bull;</span>
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
