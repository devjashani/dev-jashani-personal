"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { siteContent } from "@/content/site";
import { CornerBrackets } from "../hud/CornerBrackets";
import { MagneticButton } from "../hud/MagneticButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--ink)]/85 backdrop-blur-md border-b border-[var(--line)] py-3.5 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Wordmark & Telemetry */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
        >
          <div className="relative flex flex-col">
            <span className="font-display text-xl md:text-2xl tracking-wider text-[var(--bone)] group-hover:text-[var(--gold)] transition-colors">
              {siteContent.personal.name.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-[var(--mute)] uppercase">
              {siteContent.personal.role}
            </span>
          </div>
        </Link>

        {/* Center: Status Badge (Recruiters understand immediately within 10s) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[var(--graphite)]/90 border border-[var(--line)] text-xs font-mono text-[var(--bone)]">
          <CornerBrackets size={4} color="var(--gold)" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] tracking-wide text-[var(--mute)]">
            STATUS:{" "}
            <span className="text-[var(--bone)] font-medium">
              {siteContent.personal.statusBadge}
            </span>
          </span>
        </div>

        {/* Right: Resume Download & "Get in touch" Pill Button */}
        <div className="flex items-center gap-3">
          <a
            href={siteContent.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Dev-Jashani-Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--line)] bg-[var(--graphite)] text-xs font-mono text-[var(--bone)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all cursor-pointer"
            title="Download Dev Jashani Resume PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>RESUME</span>
          </a>

          <MagneticButton>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--bone)] text-[var(--ink)] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(200,169,106,0.4)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
