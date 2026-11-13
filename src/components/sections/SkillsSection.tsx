"use client";

import React from "react";
import {
  Code,
  Server,
  Palette,
  Layers,
  Database,
  Wrench,
  CheckCircle2,
  Sparkles,
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

function getSkillIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("react") && !n.includes("hook")) return <ReactIcon className="w-4 h-4" />;
  if (n.includes("next")) return <NextjsIcon className="w-4 h-4 text-white" />;
  if (n.includes("angular")) return <AngularIcon className="w-4 h-4" />;
  if (n.includes("typescript")) return <TypeScriptIcon className="w-4 h-4" />;
  if (n.includes("javascript")) return <JavaScriptIcon className="w-4 h-4" />;
  if (n.includes("node")) return <NodejsIcon className="w-4 h-4" />;
  if (n.includes("nest")) return <NestjsIcon className="w-4 h-4" />;
  if (n.includes("postgres")) return <PostgresIcon className="w-4 h-4" />;
  if (n.includes("prisma")) return <PrismaIcon className="w-4 h-4" />;
  if (n.includes("tailwind")) return <TailwindIcon className="w-4 h-4" />;
  if (n.includes("redux")) return <ReduxIcon className="w-4 h-4" />;
  if (n.includes("docker")) return <DockerIcon className="w-4 h-4" />;
  if (n.includes("git") && !n.includes("hub")) return <GitIcon className="w-4 h-4" />;
  if (n.includes("github")) return <GitIcon className="w-4 h-4 text-white" />;
  if (n.includes("mongo")) return <MongoDBIcon className="w-4 h-4" />;
  if (n.includes("postman")) return <PostmanIcon className="w-4 h-4" />;
  if (n.includes("vs code")) return <VSCodeIcon className="w-4 h-4" />;
  if (
    n.includes("claude") ||
    n.includes("chatgpt") ||
    n.includes("gemini") ||
    n.includes("copilot") ||
    n.includes("antigravity")
  ) {
    return <Sparkles className="w-4 h-4 text-amber-400" />;
  }
  return <Code className="w-4 h-4 text-sky-400" />;
}

function getCategoryIcon(title: string) {
  if (title.includes("Frontend")) return <Code className="w-4 h-4 text-sky-400" />;
  if (title.includes("Backend")) return <Server className="w-4 h-4 text-emerald-400" />;
  if (title.includes("UI") || title.includes("Styling")) return <Palette className="w-4 h-4 text-indigo-400" />;
  if (title.includes("State")) return <Layers className="w-4 h-4 text-violet-400" />;
  if (title.includes("Database")) return <Database className="w-4 h-4 text-amber-400" />;
  if (title.includes("AI")) return <Sparkles className="w-4 h-4 text-amber-400" />;
  return <Wrench className="w-4 h-4 text-cyan-400" />;
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-24 bg-background border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Expertise"
          title="Technical Skills"
          subtitle="A balanced summary of technical skills and practical professional experience across the software stack."
        />

        {/* 6 Clean Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div
              key={category.title}
              className="rounded-xl bg-slate-900/50 border border-slate-800 p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-slate-800/80">
                  <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                    >
                      {getSkillIcon(skill.name)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Architectural Knowledge */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
            Additional Technical &amp; Architectural Knowledge
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PORTFOLIO_DATA.additionalArchitecturalKnowledge.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">{item.title}</strong>
                  <span className="text-slate-400 block text-[11px]">{item.description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
