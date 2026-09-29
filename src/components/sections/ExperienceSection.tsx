"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { SectionShell } from "../ui/SectionShell";
import { HudPanel } from "../ui/HudPanel";
import { Briefcase, Calendar, CheckCircle2, GitCommit } from "lucide-react";

export function ExperienceSection() {
  const { experience } = siteContent;

  return (
    <SectionShell
      id="experience"
      number={experience.sectionNumber}
      title={experience.sectionTitle}
      telemetryRight="TIMELINE // INDUSTRY TENURE"
      headline={
        <>
          ENGINEERING{" "}
          <span className="font-serif-accent italic font-normal text-[var(--gold)]">
            tenure
          </span>
          .
        </>
      }
      subhead="PRODUCTION SYSTEM CONTRIBUTIONS & ARCHITECTURAL DELIVERABLES"
    >
      <div className="space-y-8 relative pl-6 sm:pl-10 border-l border-[var(--line)]">
        {experience.items.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-[var(--graphite)] border-2 border-[var(--gold)] shadow-[0_0_10px_var(--gold)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ember)]" />
            </div>

            <HudPanel glow className="p-6 sm:p-8 bg-[var(--graphite)]/85">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-5 mb-5">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[var(--gold)] tracking-widest uppercase font-bold flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    ENTERPRISE INTERNSHIP
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[var(--bone)]">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--gold)] font-medium">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--ink)] border border-[var(--line)] rounded-sm font-mono text-xs text-[var(--bone)] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--bone)] leading-relaxed mb-6 font-sans">
                {exp.description}
              </p>

              {exp.bullets && (
                <div className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--mute)] leading-relaxed font-sans">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {exp.tech && (
                <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-[var(--mute)] uppercase tracking-wider mr-2 flex items-center gap-1">
                    <GitCommit className="w-3 h-3 text-[var(--gold)]" />
                    STACK:
                  </span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[var(--ink)] border border-[var(--line)] text-[10px] font-mono text-[var(--bone)] rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </HudPanel>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
