"use client";

import React from "react";
import { GraduationCap, MapPin, CheckCircle2, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="relative py-16 sm:py-20 bg-slate-950/30 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Education"
          title="Academic Background"
          subtitle="Engineering foundation in Computer Systems, Communication Systems &amp; Software Engineering."
        />

        <div className="space-y-4">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/50 border border-slate-800 p-5 sm:p-6 space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-mono text-sky-400 font-semibold mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold mt-1">
                      <Award className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-400 font-mono">
                {edu.highlights.map((item, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
