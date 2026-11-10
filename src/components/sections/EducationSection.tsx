"use client";

import React from "react";
import { GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function EducationSection() {
  const edu = PORTFOLIO_DATA.education[0];

  return (
    <section id="education" className="relative py-16 sm:py-20 bg-slate-950/30 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Education"
          title="Academic Background"
          subtitle="Engineering foundation in Computer Science &amp; Information Technology."
        />

        <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {edu.degree}
                </h3>
                <div className="text-xs font-mono text-sky-400">
                  {edu.field}
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              {edu.period}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {edu.description}
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-2 text-xs text-slate-400 font-mono">
            {edu.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
