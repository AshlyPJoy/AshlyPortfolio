"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Toast } from "@/components/ui/Toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "info" | "error";
    message: string;
    mailToFallback?: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.contact.email);
    setCopied(true);
    setToastMessage("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({
        type: "error",
        message: "Please fill in all required fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setFeedback({
          type: "error",
          message: data.error || "An error occurred while submitting your message.",
        });
      } else if (data.configured) {
        setFeedback({
          type: "success",
          message: data.message,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Direct email credentials not configured in environment
        const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.contact.email}?subject=${encodeURIComponent(
          formData.subject || "Software Engineering Inquiry"
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;

        setFeedback({
          type: "info",
          message: data.message,
          mailToFallback: mailtoLink,
        });
      }
    } catch (err) {
      setFeedback({
        type: "error",
        message: "Failed to connect to the server. Please email Ashly directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-background border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Great Together."
          subtitle="I'm interested in connecting with teams and organizations working on meaningful software products and innovative web applications."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info & Relocation Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/90 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Communication
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an enterprise project, a full-stack engineering role, or would like to discuss technical architecture, my inbox is always open.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personal.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 shrink-0"
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

              {/* Social Channels */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Professional Profiles
                </span>

                <a
                  href={PORTFOLIO_DATA.personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-300 transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-white" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                      GitHub Repositories
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Relocation & International Opportunities Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-sky-950/20 to-slate-900 border border-sky-500/20 text-xs">
                <div className="flex items-center gap-2 text-sky-400 font-mono font-semibold mb-1">
                  <Globe2 className="w-4 h-4" />
                  <span>Target International Markets</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Open to relocation and high-impact software engineering roles across{" "}
                  <strong className="text-white">Qatar, Saudi Arabia (KSA), United Arab Emirates (UAE)</strong>, and international technology hubs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/90 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Validated message pipeline // Direct inquiry dispatch
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Engineering Opportunity in Dubai / Riyadh"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-300 mb-1.5"
                  >
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team requirements, or role overview..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-y"
                  />
                </div>

                {/* Feedback Notification Box */}
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border text-xs leading-relaxed ${
                      feedback.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                        : feedback.type === "error"
                        ? "bg-rose-500/10 border-rose-500/30 text-rose-300"
                        : "bg-sky-500/10 border-sky-500/30 text-sky-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <p>{feedback.message}</p>
                        {feedback.mailToFallback && (
                          <div>
                            <a
                              href={feedback.mailToFallback}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              Launch Pre-filled Email Client
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Verifying &amp; Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Ashly</span>
                    </>
                  )}
                </button>
              </form>
            </div>
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
