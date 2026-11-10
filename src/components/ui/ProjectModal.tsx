"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Lock,
  Calendar,
  Sparkles,
  Info,
} from "lucide-react";
import { Project } from "@/data/portfolio-data";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectMockup } from "@/components/ui/ProjectMockup";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-sky-500/10 text-white z-10 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80 transition-colors border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Category & Status */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.category}
              </span>
              <span
                className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                  project.status === "In Development"
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                    : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                }`}
              >
                {project.status === "In Development" ? "🚧 In Development" : "✓ " + project.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-sky-400 mt-1 font-mono">
              {project.tagline}
            </p>

            {/* Visual Mockup inside modal */}
            <div className="my-6">
              <ProjectMockup type={project.mockupType} title={project.title} />
            </div>

            {/* Full Overview */}
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-sky-400" />
                  System Overview
                </h4>
                <p>{project.fullOverview}</p>
              </div>

              {/* Role & Scope */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  ENGINEERING ROLE &amp; FOCUS
                </span>
                <p className="text-sm text-slate-200 font-medium">
                  {project.role}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} variant="highlight" />
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Features &amp; Deliverables
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Highlights */}
              {project.architectureHighlights && (
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-400" />
                    Architectural Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {project.architectureHighlights.map((arch, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-xs font-mono text-slate-400"
                      >
                        <span className="text-sky-400">&gt;</span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons / Placeholders */}
            <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-colors shadow-lg shadow-sky-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Live Demo: Protected / Client Internal
                  </span>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Codebase: Enterprise NDA Protected
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
