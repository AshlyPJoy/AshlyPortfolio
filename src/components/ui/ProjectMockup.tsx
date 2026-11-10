import React from "react";
import {
  Layers,
  Database,
  Play,
  Video,
  BarChart3,
  TrendingUp,
  SlidersHorizontal,
  CheckCircle,
  Clock,
  Sparkles,
  Server,
  FileSpreadsheet,
} from "lucide-react";

interface ProjectMockupProps {
  type: "assetnexus" | "motionforge" | "dashboard";
  title: string;
}

export function ProjectMockup({ type, title }: ProjectMockupProps) {
  if (type === "assetnexus") {
    return (
      <div className="w-full h-56 sm:h-64 bg-slate-950 rounded-xl border border-slate-800 p-3 sm:p-4 font-mono text-xs overflow-hidden flex flex-col justify-between relative group-hover:border-sky-500/40 transition-colors">
        {/* Top window header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="text-[11px] text-slate-400 font-sans ml-2 font-semibold">
              AssetNexus // Enterprise Master Data Console
            </span>
          </div>
          <span className="text-[10px] bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded border border-sky-500/20">
            NestJS + Prisma + Postgres
          </span>
        </div>

        {/* Mini stats cards */}
        <div className="grid grid-cols-3 gap-2 my-2 font-sans">
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800/90">
            <span className="text-[10px] text-slate-400 block">Total Assets</span>
            <span className="text-sm font-bold text-white">4,820</span>
          </div>
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800/90">
            <span className="text-[10px] text-slate-400 block">Active Brands</span>
            <span className="text-sm font-bold text-sky-400">142</span>
          </div>
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800/90">
            <span className="text-[10px] text-slate-400 block">Lifecycle Audit</span>
            <span className="text-sm font-bold text-emerald-400">100% Synced</span>
          </div>
        </div>

        {/* Data Table mockup */}
        <div className="bg-slate-900/60 rounded-lg border border-slate-800/70 p-2 flex-1 flex flex-col justify-center space-y-1.5 font-sans">
          <div className="flex justify-between text-[10px] font-mono text-slate-400 pb-1 border-b border-slate-800">
            <span>ASSET CODE</span>
            <span>CATEGORY</span>
            <span>MANUFACTURER</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-300">
            <span className="font-mono text-sky-400">#AST-8821</span>
            <span>Compute Node</span>
            <span className="text-slate-400">Dell PowerEdge</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              In-Service
            </span>
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-300">
            <span className="font-mono text-sky-400">#AST-9043</span>
            <span>Switch / Gateway</span>
            <span className="text-slate-400">Cisco Nexus</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Allocated
            </span>
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-300">
            <span className="font-mono text-sky-400">#AST-7120</span>
            <span>Storage Array</span>
            <span className="text-slate-400">NetApp FAS</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Maintenance
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "motionforge") {
    return (
      <div className="w-full h-56 sm:h-64 bg-slate-950 rounded-xl border border-slate-800 p-3 sm:p-4 font-mono text-xs overflow-hidden flex flex-col justify-between relative group-hover:border-violet-500/40 transition-colors">
        {/* Top window header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="text-[11px] text-slate-400 font-sans ml-2 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              MotionForge AI // Video Studio
            </span>
          </div>
          <span className="text-[10px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30 font-semibold animate-pulse">
            In Development
          </span>
        </div>

        {/* Video Canvas and Timeline View */}
        <div className="bg-gradient-to-br from-violet-950/30 to-slate-900/60 rounded-lg border border-slate-800/90 p-3 flex-1 flex flex-col justify-between relative">
          <div className="flex items-center justify-between font-sans">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[11px] font-medium">Rendering Frame: 00:04:12</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Remotion 60FPS</span>
          </div>

          {/* Timeline / Tracks Mockup */}
          <div className="space-y-1.5 my-2">
            <div className="h-5 rounded bg-slate-900 border border-slate-800 flex items-center px-2 justify-between">
              <span className="text-[10px] text-violet-300 font-mono">Track 1: AI Motion Scene</span>
              <span className="text-[9px] text-slate-500 font-mono">0.0s - 4.5s</span>
            </div>
            <div className="h-5 rounded bg-slate-900 border border-slate-800 flex items-center px-2 justify-between">
              <span className="text-[10px] text-sky-300 font-mono">Track 2: Kinetic Typography</span>
              <span className="text-[9px] text-slate-500 font-mono">1.2s - 5.0s</span>
            </div>
          </div>

          {/* Prompt Preview */}
          <div className="font-mono text-[10px] text-slate-400 bg-black/40 px-2 py-1 rounded truncate border border-slate-800/60">
            <span className="text-violet-400">$ prompt:</span> &quot;Transform cloud architecture doc into 30s animated visual&quot;
          </div>
        </div>
      </div>
    );
  }

  // Dashboard mockup
  return (
    <div className="w-full h-56 sm:h-64 bg-slate-950 rounded-xl border border-slate-800 p-3 sm:p-4 font-mono text-xs overflow-hidden flex flex-col justify-between relative group-hover:border-sky-500/40 transition-colors">
      {/* Top window header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="text-[11px] text-slate-400 font-sans ml-2 font-semibold">
            Analytics &amp; Data Insights Suite
          </span>
        </div>
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
          Redux Toolkit + RTK Query
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 my-1 font-sans">
        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800/90">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400">Total Ingestion</span>
            <TrendingUp className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-sm font-bold text-white mt-0.5 block">2.4M req/d</span>
        </div>
        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800/90">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400">Active Dashboards</span>
            <BarChart3 className="w-3 h-3 text-sky-400" />
          </div>
          <span className="text-sm font-bold text-sky-400 mt-0.5 block">24 Widgets</span>
        </div>
        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800/90">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400">Render Speed</span>
            <Clock className="w-3 h-3 text-indigo-400" />
          </div>
          <span className="text-sm font-bold text-indigo-400 mt-0.5 block">&lt; 16ms</span>
        </div>
      </div>

      {/* Mini SVG Chart Mockup */}
      <div className="bg-slate-900/60 rounded-lg border border-slate-800/80 p-2 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-sans">
          <span>REAL-TIME TELEMETRY</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Polling
          </span>
        </div>
        {/* CSS/SVG Bar & Trend line visualization */}
        <div className="h-14 flex items-end gap-1.5 sm:gap-2 px-1 pt-1">
          <div className="flex-1 bg-slate-800 hover:bg-sky-500/50 rounded-t h-[40%] transition-all" />
          <div className="flex-1 bg-slate-800 hover:bg-sky-500/50 rounded-t h-[65%] transition-all" />
          <div className="flex-1 bg-slate-800 hover:bg-sky-500/50 rounded-t h-[50%] transition-all" />
          <div className="flex-1 bg-sky-500/60 hover:bg-sky-400 rounded-t h-[85%] transition-all" />
          <div className="flex-1 bg-slate-800 hover:bg-sky-500/50 rounded-t h-[60%] transition-all" />
          <div className="flex-1 bg-slate-800 hover:bg-sky-500/50 rounded-t h-[75%] transition-all" />
          <div className="flex-1 bg-sky-500/90 hover:bg-sky-400 rounded-t h-[95%] transition-all" />
          <div className="flex-1 bg-indigo-500/80 hover:bg-indigo-400 rounded-t h-[80%] transition-all" />
        </div>
      </div>
    </div>
  );
}
