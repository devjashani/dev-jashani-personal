"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-[var(--ink)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Intent */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display text-lg text-[var(--bone)] tracking-wider">
            {siteContent.personal.name.toUpperCase()}
          </span>
          <p className="font-mono text-[10px] text-[var(--mute)]">
            DESIGNED & ARCHITECTED // 2035 SPECIFICATION
          </p>
        </div>

        {/* Center: Spark Motif & Core Tech */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--mute)]">
          <span>HUMAN</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember)] shadow-[0_0_6px_var(--ember)]" />
          <span>CIRCUIT</span>
          <span className="text-[var(--gold)] mx-2">|</span>
          <span>JAVA • SPRING BOOT • REACT</span>
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--graphite)] border border-[var(--line)] hover:border-[var(--gold)] text-[var(--bone)] hover:text-[var(--gold)] text-xs font-mono tracking-wider transition-all"
          aria-label="Back to top"
        >
          <span>ASCEND</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>

      {/* Legal & Coordinates */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-[var(--line)]/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-[var(--mute)]/70">
        <span>
          © {new Date().getFullYear()} {siteContent.personal.name}. ALL RIGHTS RESERVED.
        </span>
        <span>
          TELEMETRY: {siteContent.personal.coordinates} {"//"} TIMEZONE: ASIA/KOLKATA
        </span>
      </div>
    </footer>
  );
}
