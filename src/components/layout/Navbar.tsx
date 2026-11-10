"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const id = NAV_LINKS[i].href.substring(1);
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Moniker */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-slate-950 font-black text-sm">
              AJ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-1">
                {PORTFOLIO_DATA.personal.title}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-sky-500/10 text-sky-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PORTFOLIO_DATA.personal.contact.resumeUrl}
              download="Ashly_P_Joy_FullStack_Developer_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={PORTFOLIO_DATA.personal.contact.resumeUrl}
              download="Ashly_P_Joy_FullStack_Developer_Resume.pdf"
              className="p-2 rounded-lg bg-slate-900 text-sky-400 border border-slate-800"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-sky-400 text-slate-950 text-xs font-bold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Ashly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
