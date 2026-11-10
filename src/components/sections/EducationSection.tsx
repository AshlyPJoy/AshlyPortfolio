"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function EducationSection() {
  const edu = PORTFOLIO_DATA.education[0];

  return (
    <section id="education" className="relative py-20 sm:py-28 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Foundational engineering education grounded in computer science, system architectures, and algorithmic problem solving."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-slate-900/50 border border-slate-800/90 p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-sky-400 mt-1 font-mono">
                    {edu.field}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {edu.institution}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end font-mono text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/80">
                  {edu.period}
                </span>
                <span className="flex items-center gap-1 mt-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {edu.location}
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-300 leading-relaxed">
              {edu.description}
            </p>

            <div className="mt-6 pt-5 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Key Academic Highlights
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {edu.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
