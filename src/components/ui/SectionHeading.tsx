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
        "flex flex-col mb-8 sm:mb-10",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-2.5 py-0.5 mb-2.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-[11px] font-mono uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl text-xs sm:text-sm text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
