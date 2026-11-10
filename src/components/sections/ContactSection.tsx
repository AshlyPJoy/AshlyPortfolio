"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Toast } from "@/components/ui/Toast";

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setToastMessage(`${label} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Great Together."
          subtitle="I'm interested in connecting with teams and organizations working on meaningful software products and innovative web applications."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {/* Email Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Primary Email
                </span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                  className="text-sm sm:text-base font-mono font-medium text-white hover:text-sky-300 transition-colors"
                >
                  {PORTFOLIO_DATA.personal.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.contact.email, "Email")}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied === "Email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Phone &amp; WhatsApp
                </span>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.contact.phone}`}
                  className="text-sm sm:text-base font-mono font-medium text-white hover:text-emerald-300 transition-colors"
                >
                  {PORTFOLIO_DATA.personal.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={PORTFOLIO_DATA.personal.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.contact.phone, "Phone")}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copied === "Phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn and GitHub Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={PORTFOLIO_DATA.personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800 text-sky-400 border border-slate-700">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">LinkedIn</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    linkedin.com/in/ashlyjoy812
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800 text-white border border-slate-700">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">GitHub</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                    github.com/ashlypjoy
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Relocation notice */}
          <div className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Based in <strong className="text-white">Kerala, India</strong> &bull; Open to relocation in <strong className="text-white">Qatar, Saudi Arabia (KSA), UAE</strong> &amp; Global Remote.
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
