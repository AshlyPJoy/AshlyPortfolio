"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Toast } from "@/components/ui/Toast";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.contact.email);
    setCopied(true);
    setToastMessage("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Great Together."
          subtitle="I'm interested in connecting with teams and organizations working on meaningful software products and innovative web applications."
        />

        {/* Simplified, elegant direct contact grid */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Direct Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Email Me Directly
                </span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-sky-300 transition-colors"
                >
                  {PORTFOLIO_DATA.personal.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={PORTFOLIO_DATA.personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-sky-400 border border-slate-700">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Professional Network</span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-white border border-slate-700">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Open Source &amp; Code</span>
                  <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                    GitHub Profile
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Relocation / International Info Pill */}
          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Open to relocation &amp; international opportunities in <strong className="text-slate-200">Qatar, Saudi Arabia, UAE</strong>, and global remote roles.
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[11px] text-emerald-400">
              ● Ready to Connect
            </span>
          </div>
        </div>
      </div>

      <Toast
        message={toastMessage || ""}
        isOpen={Boolean(toastMessage)}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
}
