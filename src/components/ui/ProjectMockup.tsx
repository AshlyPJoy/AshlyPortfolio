import React from "react";
import { Sparkles, Database, Layers, BarChart3 } from "lucide-react";

interface ProjectMockupProps {
  type: "assetnexus" | "motionforge" | "dashboard";
  title: string;
}

export function ProjectMockup({ type }: ProjectMockupProps) {
  if (type === "assetnexus") {
    return (
      <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="font-semibold text-white">AssetNexus Console</span>
          </div>
          <span className="text-[10px] text-slate-500">NestJS · Prisma · PostgreSQL</span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Master Assets</div>
            <div className="text-xs font-bold text-white">4,800+</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Manufacturers</div>
            <div className="text-xs font-bold text-sky-400">140+</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Lifecycle</div>
            <div className="text-xs font-bold text-emerald-400">Verified</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 truncate">
          Modules: Lifecycle Tracking · Brand/Model Master · REST Contracts
        </div>
      </div>
    );
  }

  if (type === "motionforge") {
    return (
      <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="font-semibold text-white">MotionForge AI Studio</span>
          </div>
          <span className="text-[10px] text-amber-400 font-sans font-medium px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
            In Development
          </span>
        </div>

        <div className="space-y-1.5 my-1 font-sans">
          <div className="h-4 bg-slate-900 rounded px-2 flex items-center justify-between text-[10px] text-violet-300">
            <span>Track 1: AI Storyboard Sequences</span>
            <span className="text-slate-500 font-mono">Remotion</span>
          </div>
          <div className="h-4 bg-slate-900 rounded px-2 flex items-center justify-between text-[10px] text-sky-300">
            <span>Track 2: Programmatic Motion Graphics</span>
            <span className="text-slate-500 font-mono">60 FPS</span>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 truncate">
          Features: Timeline Sequencing · Visual Style Presets · Video Export
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
          <span className="font-semibold text-white">Analytics Suite</span>
        </div>
        <span className="text-[10px] text-slate-500">React · Redux Toolkit</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
        <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
          <div className="text-[10px] text-slate-400">Data Tables</div>
          <div className="text-xs font-bold text-white">Sort &amp; Filter</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
          <div className="text-[10px] text-slate-400">Form Validation</div>
          <div className="text-xs font-bold text-sky-400">Dynamic</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
          <div className="text-[10px] text-slate-400">Throughput</div>
          <div className="text-xs font-bold text-emerald-400">Real-time</div>
        </div>
      </div>

      <div className="text-[10px] text-slate-400 truncate">
        Features: Multi-column Tables · Reusable Widgets · REST Integration
      </div>
    </div>
  );
}
