"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import { SectionShell } from "../ui/SectionShell";
import { HudPanel } from "../ui/HudPanel";
import { Marquee } from "../ui/Marquee";
import { Cpu } from "lucide-react";

export function StackSection() {
  const { stack } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const allSkills = stack.categories.flatMap((cat) => cat.skills);

  return (
    <SectionShell
      id="stack"
      number={stack.sectionNumber}
      title={stack.sectionTitle}
      telemetryRight="ECOSYSTEM // RUNTIMES & TOOLING"
      headline={
        <>
          TECHNICAL{" "}
          <span className="font-serif-accent italic font-normal text-[var(--gold)]">
            capabilities
          </span>
          .
        </>
      }
      subhead="CORE SPECIALIZATIONS IN ENTERPRISE BACKEND & CONTEMPORARY CLIENT RUNTIMES"
      className="overflow-hidden pb-12"
    >
      <div className="flex flex-col gap-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all ${
              activeCategory === "all"
                ? "bg-[var(--gold)] text-[var(--ink)] font-bold shadow-[0_0_12px_rgba(200,169,106,0.3)]"
                : "bg-[var(--graphite)] border border-[var(--line)] text-[var(--mute)] hover:text-[var(--bone)]"
            }`}
          >
            ALL [24]
          </button>
          {stack.categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full transition-all ${
                activeCategory === cat.key
                  ? "bg-[var(--gold)] text-[var(--ink)] font-bold shadow-[0_0_12px_rgba(200,169,106,0.3)]"
                  : "bg-[var(--graphite)] border border-[var(--line)] text-[var(--mute)] hover:text-[var(--bone)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Grid with HudPanel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.categories
            .filter((cat) => activeCategory === "all" || activeCategory === cat.key)
            .map((cat) => (
              <HudPanel key={cat.key} className="p-6 bg-[var(--graphite)]/70">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-5 font-mono text-xs">
                  <h3 className="flex items-center gap-2 text-[var(--gold)] font-bold">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{cat.title.toUpperCase()}</span>
                  </h3>
                  <span className="text-[10px] text-[var(--mute)]">
                    {cat.skills.length} MODULES
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-[var(--ink)]/80 border border-[var(--line)] rounded-sm hover:border-[var(--gold)] transition-all cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                      <span className="text-xs font-mono text-[var(--bone)] group-hover:text-[var(--gold)] transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </HudPanel>
            ))}
        </div>
      </div>

      {/* Infinite Horizontal Stack Marquee */}
      <div className="mt-20 -mx-6 md:-mx-12">
        <Marquee speedSeconds={30}>
          {allSkills.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 font-display text-2xl sm:text-3xl text-[var(--mute)]/50 tracking-wider hover:text-[var(--gold)] transition-colors"
            >
              <span>{item.toUpperCase()}</span>
              <span className="text-[var(--ember)] text-sm">✦</span>
            </div>
          ))}
        </Marquee>
      </div>
    </SectionShell>
  );
}
