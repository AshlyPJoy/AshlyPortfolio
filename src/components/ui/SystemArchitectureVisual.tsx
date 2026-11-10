"use client";

import React from "react";
import {
  ReactIcon,
  NextjsIcon,
  AngularIcon,
  TypeScriptIcon,
  NodejsIcon,
  NestjsIcon,
  PostgresIcon,
} from "@/components/icons/TechIcons";

export function SystemArchitectureVisual() {
  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] text-slate-400 ml-2">ashly-developer.config.ts</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active</span>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="p-5 sm:p-6 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
        <div>
          <span className="text-violet-400 font-semibold">export const</span>{" "}
          <span className="text-sky-300">developer</span> = &#123;
        </div>

        <div className="pl-4 space-y-1.5">
          <div>
            <span className="text-slate-400">name:</span>{" "}
            <span className="text-emerald-300">&quot;Ashly P Joy&quot;</span>,
          </div>
          <div>
            <span className="text-slate-400">title:</span>{" "}
            <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
          </div>
          <div>
            <span className="text-slate-400">experience:</span>{" "}
            <span className="text-sky-300">&quot;4+ Years Professional (ULTS)&quot;</span>,
          </div>
          <div>
            <span className="text-slate-400">education:</span>{" "}
            <span className="text-violet-300">&quot;M.Tech (8.76 CGPA) &amp; B.Tech&quot;</span>,
          </div>
          <div>
            <span className="text-slate-400">frontend:</span> [
            <span className="text-sky-300">&quot;React.js&quot;</span>,{" "}
            <span className="text-sky-300">&quot;Next.js&quot;</span>,{" "}
            <span className="text-sky-300">&quot;Angular&quot;</span>,{" "}
            <span className="text-sky-300">&quot;TypeScript&quot;</span>
            ],
          </div>
          <div>
            <span className="text-slate-400">backend:</span> [
            <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;NestJS&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Prisma&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Docker&quot;</span>
            ],
          </div>
          <div>
            <span className="text-slate-400">contact:</span> &#123;{" "}
            <span className="text-slate-400">email:</span>{" "}
            <span className="text-sky-300">&quot;ashlypj@outlook.com&quot;</span>,{" "}
            <span className="text-slate-400">phone:</span>{" "}
            <span className="text-sky-300">&quot;+91 9562022861&quot;</span>{" "}
            &#125;,
          </div>
          <div>
            <span className="text-slate-400">targetRegions:</span> [
            <span className="text-amber-300">&quot;Qatar&quot;</span>,{" "}
            <span className="text-amber-300">&quot;Saudi Arabia&quot;</span>,{" "}
            <span className="text-amber-300">&quot;UAE&quot;</span>,{" "}
            <span className="text-amber-300">&quot;Remote&quot;</span>
            ],
          </div>
        </div>

        <div>&#125;;</div>
      </div>

      {/* Brand Badges Strip */}
      <div className="px-5 py-3 bg-slate-950/50 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-[11px]">
        <div className="flex items-center gap-3">
          <ReactIcon className="w-4 h-4" />
          <NextjsIcon className="w-4 h-4 text-white" />
          <AngularIcon className="w-4 h-4" />
          <TypeScriptIcon className="w-4 h-4" />
          <NodejsIcon className="w-4 h-4" />
          <NestjsIcon className="w-4 h-4" />
          <PostgresIcon className="w-4 h-4" />
        </div>
        <span className="text-slate-500 font-sans hidden sm:inline">linkedin.com/in/ashlyjoy812</span>
      </div>
    </div>
  );
}
