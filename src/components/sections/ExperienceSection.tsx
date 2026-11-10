"use client";

import React from "react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { TechBadge } from "@/components/ui/TechBadge";

export function ExperienceSection() {
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="relative py-20 sm:py-24 bg-background border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Experience"
          title="Professional Journey"
          subtitle="Full stack software engineering experience building enterprise web systems."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800">
          {/* Dot */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400" />

          {/* Card */}
          <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sky-400" />
                  {exp.company}
                </h3>
                <div className="text-sm font-mono text-sky-400 font-semibold mt-0.5">
                  {exp.role} &bull; <span className="text-slate-400 font-sans">{exp.experienceYears}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {exp.description}
            </p>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Key Responsibilities:
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">&bull;</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} size="sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
