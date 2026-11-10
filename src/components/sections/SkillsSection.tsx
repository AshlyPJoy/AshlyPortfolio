"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Palette,
  Layers,
  Database,
  Wrench,
  Sparkles,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ReactIcon,
  NextjsIcon,
  AngularIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodejsIcon,
  NestjsIcon,
  PostgresIcon,
  PrismaIcon,
  TailwindIcon,
  ReduxIcon,
  DockerIcon,
  GitIcon,
  MongoDBIcon,
  PostmanIcon,
  VSCodeIcon,
} from "@/components/icons/TechIcons";

// Helper to map skill name to icon
function getSkillIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("react") && !n.includes("hook")) return <ReactIcon className="w-5 h-5" />;
  if (n.includes("next")) return <NextjsIcon className="w-5 h-5 text-white" />;
  if (n.includes("angular")) return <AngularIcon className="w-5 h-5" />;
  if (n.includes("typescript")) return <TypeScriptIcon className="w-5 h-5" />;
  if (n.includes("javascript")) return <JavaScriptIcon className="w-5 h-5" />;
  if (n.includes("node")) return <NodejsIcon className="w-5 h-5" />;
  if (n.includes("nest")) return <NestjsIcon className="w-5 h-5" />;
  if (n.includes("postgres")) return <PostgresIcon className="w-5 h-5" />;
  if (n.includes("prisma")) return <PrismaIcon className="w-5 h-5" />;
  if (n.includes("tailwind")) return <TailwindIcon className="w-5 h-5" />;
  if (n.includes("redux")) return <ReduxIcon className="w-5 h-5" />;
  if (n.includes("docker")) return <DockerIcon className="w-5 h-5" />;
  if (n.includes("git") && !n.includes("hub")) return <GitIcon className="w-5 h-5" />;
  if (n.includes("github")) return <GitIcon className="w-5 h-5 text-white" />;
  if (n.includes("mongo")) return <MongoDBIcon className="w-5 h-5" />;
  if (n.includes("postman")) return <PostmanIcon className="w-5 h-5" />;
  if (n.includes("vs code")) return <VSCodeIcon className="w-5 h-5" />;
  return <Code className="w-5 h-5 text-sky-400" />;
}

// Category icons
function getCategoryHeaderIcon(title: string) {
  if (title.includes("Frontend")) return <Code className="w-5 h-5 text-sky-400" />;
  if (title.includes("Backend")) return <Server className="w-5 h-5 text-emerald-400" />;
  if (title.includes("UI Frameworks")) return <Palette className="w-5 h-5 text-indigo-400" />;
  if (title.includes("State")) return <Layers className="w-5 h-5 text-violet-400" />;
  if (title.includes("Database")) return <Database className="w-5 h-5 text-amber-400" />;
  return <Wrench className="w-5 h-5 text-cyan-400" />;
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...PORTFOLIO_DATA.skills.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "All"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-background border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &amp; Technologies"
          subtitle="Structured into specialized domains reflecting hands-on production experience in enterprise software engineering."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/10"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl bg-slate-900/50 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/70 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {getCategoryHeaderIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-normal">
                  {category.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/70 hover:border-sky-500/30 transition-colors group/item"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="shrink-0 group-hover/item:scale-110 transition-transform">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {skill.tag || skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Architectural & Engineering Knowledge */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Additional Technical &amp; Architectural Knowledge
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {PORTFOLIO_DATA.additionalArchitecturalKnowledge.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/20 transition-all flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200 font-mono">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
