import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: "sm" | "md";
  variant?: "default" | "highlight" | "outline";
}

export function TechBadge({
  name,
  className,
  size = "md",
  variant = "default",
}: TechBadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  const variantStyles = {
    default:
      "bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-500/80 hover:text-white transition-colors",
    highlight:
      "bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/15 transition-all shadow-sm shadow-sky-500/10",
    outline:
      "bg-transparent text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-slate-200 transition-colors",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-md tracking-wide font-mono",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {name}
    </span>
  );
}
