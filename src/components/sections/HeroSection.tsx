"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "@/content/site";
import { useISTClock } from "@/hooks/useISTClock";
import { HeroCanvas } from "../canvas/HeroCanvas";
import { CornerBrackets } from "../hud/CornerBrackets";
import { ScrambleText } from "../ui/ScrambleText";
import { MagneticButton } from "../ui/MagneticButton";

export function HeroSection() {
  const [lineIndex, setLineIndex] = useState(0);
  const istTime = useISTClock();

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % siteContent.hero.rotatingLines.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Dev Jashani — Hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 border-b border-[var(--line)] overflow-hidden bg-[var(--ink)]"
    >
      <CornerBrackets size={16} color="var(--gold)" />

      {/* Top HUD Telemetry Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[var(--line)] font-mono text-xs text-[var(--mute)] z-20">
        {/* Left: Location & System Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[var(--bone)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span className="font-bold tracking-widest uppercase">
              {siteContent.personal.location}
            </span>
            <span className="text-[10px] text-[var(--mute)]">
              [{siteContent.personal.coordinates}]
            </span>
          </div>

          <span className="hidden sm:inline text-[var(--line)]">|</span>

          <div className="hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] tracking-wider text-emerald-400 uppercase font-semibold">
              AVAILABLE 2026
            </span>
          </div>
        </div>

        {/* Right: Live Clock & Current Date */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[var(--bone)] font-mono">
            <Clock className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span className="tracking-wider tabular-nums font-medium">{istTime}</span>
          </div>

          <div className="hidden md:flex items-center gap-2 px-2.5 py-0.5 bg-[var(--graphite)] border border-[var(--line)] text-[10px] text-[var(--gold)] font-mono">
            <span>30 SEP 2026</span>
          </div>
        </div>
      </div>

      {/* Center Main Stage: Huge Headline, Rotating Lines, and WebGL Canvas */}
      <div className="w-full max-w-7xl mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
        
        {/* Left Column (lg:col-span-7): Typographic Manifesto */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Subtitle / Role Tag */}
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--gold)] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--ember)] animate-ping" />
            <span className="font-bold">{siteContent.personal.role.toUpperCase()}</span>
            <span className="h-[1px] w-8 bg-[var(--gold)]/40" />
            <span className="text-[var(--mute)] hidden sm:inline">ENTERPRISE ARCHITECTURE</span>
          </div>

          {/* Huge Anton Headline "DEV JASHANI" with Decode Scramble */}
          <div className="select-none">
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[8.5rem] tracking-tight leading-[0.88] text-[var(--bone)]">
              <span className="sr-only">Dev Jashani — Java Full Stack Developer</span>
              <span aria-hidden="true">
                <ScrambleText text={siteContent.personal.name.toUpperCase()} speed={24} />
              </span>
            </h1>
          </div>

          {/* Rotating Subtitle Lines from Content */}
          <div className="h-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3 font-mono text-sm sm:text-base text-[var(--gold)] font-medium"
              >
                <Sparkles
                  className="w-4 h-4 text-[var(--ember)] flex-shrink-0 animate-spin"
                  style={{ animationDuration: "6s" }}
                />
                <span className="tracking-wide">
                  {siteContent.hero.rotatingLines[lineIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bio snippet */}
          <p className="text-sm sm:text-base text-[var(--mute)] max-w-xl leading-relaxed font-sans">
            Specialized in production-ready <strong className="text-[var(--bone)] font-semibold">Spring Boot microservices</strong>, distributed backend reliability, and modern interfaces with <strong className="text-[var(--bone)] font-semibold">React</strong> and <strong className="text-[var(--bone)] font-semibold">PostgreSQL</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--gold)] text-[var(--ink)] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[var(--bone)] transition-all duration-300 shadow-[0_0_25px_rgba(200,169,106,0.35)]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--line)] bg-[var(--graphite)] text-[var(--bone)] font-mono text-xs font-semibold tracking-wider uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </div>

        </div>

        {/* Right Column (lg:col-span-5): WebGL Canvas & Rotating "Open for Work" Badge */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          
          {/* Rotating Circular Badge "Open to SDE / Backend / Full Stack roles — 2026" */}
          <div
            aria-label="Open to SDE / Backend / Full Stack roles — 2026"
            className="absolute -top-6 -right-2 md:-right-6 z-20 hidden sm:flex items-center justify-center w-36 h-36 pointer-events-none select-none"
          >
            {/* Concentric Dashed Ring */}
            <div className="absolute inset-0 rounded-full border border-[var(--gold)]/30 border-dashed orbit-spin-slow" />
            <div className="absolute inset-3 rounded-full border border-[var(--gold)]/20" />

            {/* Circular Path Text */}
            <svg className="w-full h-full orbit-spin-slow" viewBox="0 0 120 120">
              <defs>
                <path
                  id="heroBadgePath"
                  d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>
              <text className="font-mono text-[7px] uppercase fill-[var(--gold)] tracking-[0.24em] font-semibold">
                <textPath href="#heroBadgePath">
                  OPEN TO SDE / BACKEND / FULL STACK ROLES — 2026 •
                </textPath>
              </text>
            </svg>

            {/* Central Glow Core */}
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] shadow-[0_0_10px_var(--gold)]" />
          </div>

          {/* WebGL R3F Halftone Canvas Container */}
          <div className="w-full aspect-[4/3] sm:aspect-[16/10] max-w-xl">
            <HeroCanvas />
          </div>

        </div>

      </div>

      {/* Bottom HUD Bar & Scroll Hint */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-4 border-t border-[var(--line)] font-mono text-[10px] text-[var(--mute)] z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span>HUMAN × MACHINE // MARBLE & CIRCUIT</span>
        </div>

        {/* Animated Scroll Hint */}
        <Link
          href="#about"
          className="flex items-center gap-1.5 text-[var(--bone)] hover:text-[var(--gold)] transition-colors uppercase tracking-widest cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[var(--gold)] animate-bounce" />
        </Link>

        <div className="hidden sm:flex items-center gap-3">
          <span>COORDINATES: {siteContent.personal.coordinates}</span>
        </div>
      </div>
    </section>
  );
}
