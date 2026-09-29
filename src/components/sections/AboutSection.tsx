"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { SectionShell } from "../ui/SectionShell";
import { HudPanel } from "../ui/HudPanel";
import { GoldRing } from "../hud/GoldRing";
import { CornerBrackets } from "../hud/CornerBrackets";
import { CheckCircle2, Terminal } from "lucide-react";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <SectionShell
      id="about"
      number={about.sectionNumber}
      title={about.sectionTitle}
      telemetryRight="ORIGIN: INDIA // CSE GRADUATE"
      headline={
        <>
          BRIDGING SOLID CODE WITH{" "}
          <span className="font-serif-accent italic font-normal text-[var(--gold)]">
            scalable architecture
          </span>
          .
        </>
      }
      subhead="ENGINEERING SYSTEMS GROUNDED IN ROBUST BACKEND PRINCIPLES"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Antique Parian Marble & Circuit Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <GoldRing size={420} className="absolute opacity-60 scale-90 sm:scale-100" />
          <GoldRing size={300} reverse className="absolute opacity-40 scale-90 sm:scale-100" />

          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-sm overflow-hidden border border-[var(--line)] bg-[var(--graphite)] shadow-2xl z-10">
            <CornerBrackets size={10} color="var(--gold)" />
            <Image
              src={about.image}
              alt="Antique Parian marble bust merged with exposed cybernetic circuitry"
              fill
              sizes="(max-width: 768px) 280px, 320px"
              className="object-cover filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute bottom-3 left-3 right-3 p-2 bg-[var(--ink)]/85 backdrop-blur-md border border-[var(--line)] flex items-center justify-between text-[9px] font-mono">
              <span className="text-[var(--gold)] font-bold">MARBLE × CIRCUIT</span>
              <span className="text-[var(--mute)]">2035 CORE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Focus Areas */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <HudPanel glow className="p-6 sm:p-8">
            <p className="text-sm sm:text-base text-[var(--bone)] leading-relaxed font-sans opacity-95">
              {about.bioParagraph}
            </p>
          </HudPanel>

          <div className="space-y-3">
            <h3 className="font-mono text-xs text-[var(--gold)] uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>CURRENT LEARNING VELOCITY & FOCUS:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.learningFocus.map((focus, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-[var(--graphite)]/60 border border-[var(--line)] rounded-sm group hover:border-[var(--gold)]/50 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                  <span className="text-xs font-mono text-[var(--bone)] group-hover:text-[var(--gold)] transition-colors">
                    {focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-[var(--gold)] pl-4 py-1 italic font-serif-accent text-lg sm:text-xl text-[var(--bone)]">
            &ldquo;{about.philosophyQuote.regular}{" "}
            <span className="text-[var(--gold)] font-medium">
              {about.philosophyQuote.italic}
            </span>
            &rdquo;
            <span className="block mt-1 font-mono text-[10px] text-[var(--mute)] not-italic uppercase tracking-widest">
              — {about.philosophyQuote.author}
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
