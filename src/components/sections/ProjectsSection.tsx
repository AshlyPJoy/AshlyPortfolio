"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Maximize2,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Works"
          title="Engineered Projects"
          subtitle="Enterprise systems, media platforms, and data-intensive applications architected with modern full-stack technologies."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isInDev = project.status === "In Development";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700/80 transition-all overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-sky-500/5"
              >
                <div>
                  {/* Visual Mockup Header */}
                  <div className="relative p-3 pb-0">
                    <ProjectMockup type={project.mockupType} title={project.title} />

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => handleOpenDetails(project)}
                      className="absolute inset-x-3 bottom-0 py-2.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-center justify-center gap-2 text-xs font-mono text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Inspect Full Architecture</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-sky-400 border border-slate-700/60">
                        {project.category}
                      </span>

                      {isInDev ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          In Development
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key features bullets preview */}
                    <div className="mt-4 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        {isInDev ? "Planned Functionality:" : "Key Architectural Deliverables:"}
                      </span>
                      {project.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                          <span className="text-sky-400 shrink-0 mt-0.5">&bull;</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[10px] font-mono text-slate-400 self-center">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 mt-2 border-t border-slate-800/60 pt-4 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group/btn"
                  >
                    <span>View Full Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-300 cursor-help"
                        title="Enterprise internal deployment / Private walkthrough on request"
                      >
                        <Lock className="w-3.5 h-3.5" />
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-300 cursor-help"
                        title="Enterprise NDA Codebase / Available on recruiter request"
                      >
                        <Github className="w-3.5 h-3.5 opacity-50" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
