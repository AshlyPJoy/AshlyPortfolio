"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  CheckCircle2,
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
    <section id="projects" className="relative py-20 sm:py-24 bg-slate-950/30 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Real-world enterprise systems, video creation workflows, and data-intensive applications."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => {
            const isInDev = project.status === "In Development";

            return (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors p-5"
              >
                <div>
                  {/* Visual Preview */}
                  <div className="mb-4">
                    <ProjectMockup type={project.mockupType} title={project.title} />
                  </div>

                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                      {project.category}
                    </span>

                    {isInDev ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                        In Development
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key features preview */}
                  <div className="mt-3 space-y-1">
                    {project.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="text-sky-400">&bull;</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-slate-500 self-center">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>Private / NDA</span>
                  </div>
                </div>
              </article>
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
