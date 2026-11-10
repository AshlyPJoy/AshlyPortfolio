"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Server,
  Database,
  Cpu,
  Terminal,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import {
  ReactIcon,
  NextjsIcon,
  AngularIcon,
  TypeScriptIcon,
  NodejsIcon,
  NestjsIcon,
  PostgresIcon,
  PrismaIcon,
  DockerIcon,
} from "@/components/icons/TechIcons";

type ActiveTab = "architecture" | "terminal" | "metrics";

export function SystemArchitectureVisual() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("architecture");
  const [selectedNode, setSelectedNode] = useState<string>("nextjs");

  const nodes = [
    {
      id: "nextjs",
      layer: "Frontend Layer",
      title: "Next.js / React.js",
      subtitle: "App Router & SSR Architecture",
      icon: <NextjsIcon className="w-5 h-5 text-white" />,
      tag: "Client & Server Components",
      details:
        "High-performance frontend engineering using Next.js App Router, React Server Components, responsive Tailwind CSS layouts, and atomic UI libraries.",
      stats: { latency: "14ms", caching: "Edge ISR", typeSafety: "Strict TS" },
    },
    {
      id: "angular",
      layer: "Enterprise Frontend",
      title: "Angular Architecture",
      subtitle: "Standalone & Reactive UI",
      icon: <AngularIcon className="w-5 h-5" />,
      tag: "RxJS & Signals",
      details:
        "Modular enterprise applications leveraging Angular Standalone Components, new control flow (@if, @for), reactive form validation, and complex dashboard tables.",
      stats: { architecture: "Modular", forms: "Strict Typed", state: "RxJS" },
    },
    {
      id: "nestjs",
      layer: "Backend API Layer",
      title: "NestJS / Node.js",
      subtitle: "Modular REST API Engine",
      icon: <NestjsIcon className="w-5 h-5" />,
      tag: "Controllers & Services",
      details:
        "Scalable backend architecture featuring dependency injection, DTO validation with class-validator, JWT authentication, and structured business services.",
      stats: { protocol: "REST / HTTP", auth: "JWT / RBAC", throughput: "High" },
    },
    {
      id: "prisma",
      layer: "Data & Persistence Layer",
      title: "PostgreSQL & Prisma",
      subtitle: "Type-Safe Relational Storage",
      icon: <PrismaIcon className="w-5 h-5" />,
      tag: "ORM & Relational Schemas",
      details:
        "Reliable data architecture utilizing PostgreSQL schemas, relational master data structures, Prisma migrations, and indexed query optimizations.",
      stats: { db: "PostgreSQL", orm: "Prisma", pooling: "Optimized" },
    },
  ];

  const currentNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800/80 shadow-2xl shadow-sky-950/20 backdrop-blur-xl overflow-hidden">
      {/* Top bar with tabs & status */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline-block">
            ashly-p-joy // fullstack-architecture.sys
          </span>
        </div>

        <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
              activeTab === "architecture"
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
              activeTab === "terminal"
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Live Terminal
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
              activeTab === "metrics"
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Health
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "architecture" && (
            <motion.div
              key="arch"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  Multi-Tier Engineering Blueprint
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Synced & Operational
                </span>
              </div>

              {/* Architecture Nodes Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {nodes.map((node) => {
                  const isSelected = selectedNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`text-left p-3 rounded-xl border transition-all relative overflow-hidden group ${
                        isSelected
                          ? "bg-gradient-to-br from-slate-800/90 to-slate-900 border-sky-500/50 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/20"
                          : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                          {node.icon}
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/40">
                          {node.tag}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-white group-hover:text-sky-300 transition-colors">
                        {node.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 truncate">
                        {node.subtitle}
                      </div>
                      {isSelected && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Node Inspector Panel */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-sky-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentNode.layer} // {currentNode.title}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                    {Object.entries(currentNode.stats).map(([k, v]) => (
                      <span key={k}>
                        <span className="text-slate-500">{k}:</span>{" "}
                        <span className="text-slate-300 font-medium">{v}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {currentNode.details}
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "terminal" && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-xs space-y-2 bg-black/60 p-4 rounded-xl border border-slate-800"
            >
              <div className="text-slate-400 flex items-center justify-between pb-2 border-b border-slate-800/60">
                <span className="text-sky-400 font-semibold">$ nest start:dev --watch</span>
                <span className="text-[10px] text-slate-500">v10.4.5</span>
              </div>
              <div className="text-emerald-400">
                [Nest] 12480 - 11/09/2026, 11:20:00 AM LOG [NestFactory] Starting Nest application...
              </div>
              <div className="text-slate-300">
                [Nest] 12480 - LOG [InstanceLoader] AppModule dependencies initialized +18ms
              </div>
              <div className="text-slate-300">
                [Nest] 12480 - LOG [InstanceLoader] PrismaModule dependencies initialized +2ms
              </div>
              <div className="text-sky-300">
                [Nest] 12480 - LOG [RoutesResolver] AssetNexusController &#123;/api/v1/assets&#125;: +4ms
              </div>
              <div className="text-slate-400">
                &nbsp;&nbsp;Mapped &#123;/api/v1/assets, GET&#125; route +1ms
              </div>
              <div className="text-slate-400">
                &nbsp;&nbsp;Mapped &#123;/api/v1/assets/:id/lifecycle, PATCH&#125; route +1ms
              </div>
              <div className="text-emerald-400 pt-2 border-t border-slate-800/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 inline" />
                <span>Nest application successfully started on port 4000 [Ready for requests]</span>
              </div>
            </motion.div>
          )}

          {activeTab === "metrics" && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                System Telemetry & Architecture Quality
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400">CODEBASE TYPE SAFETY</div>
                  <div className="text-lg font-bold text-sky-400 font-mono mt-0.5">100% Strict</div>
                  <div className="text-[10px] text-slate-400 mt-1">Zero any &amp; full inferencing</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400">AVG API LATENCY</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">&lt; 38 ms</div>
                  <div className="text-[10px] text-slate-400 mt-1">Prisma pool &amp; indexed DB</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono text-slate-400">ARCHITECTURE</div>
                  <div className="text-lg font-bold text-indigo-400 font-mono mt-0.5">Modular 4+ Yrs</div>
                  <div className="text-[10px] text-slate-400 mt-1">Enterprise design patterns</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between font-mono">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  REST API Contract Validation
                </span>
                <span className="text-emerald-400 font-medium">Passed // Schema Compliant</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info pill */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping inline-block" />
            <span>Full-Stack Lifecycle: UI &rarr; API &rarr; Database</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">TypeScript End-to-End</span>
        </div>
      </div>
    </div>
  );
}
