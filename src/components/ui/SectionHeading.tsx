import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-medium tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-20 mt-6 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-transparent",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
