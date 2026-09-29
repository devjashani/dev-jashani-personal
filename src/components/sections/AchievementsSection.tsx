"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { SectionShell } from "../ui/SectionShell";
import { HudPanel } from "../ui/HudPanel";
import { Trophy, Award, Code2, Database, ArrowUpRight } from "lucide-react";

export function AchievementsSection() {
  const { credentials } = siteContent;

  return (
    <SectionShell
      id="credentials"
      number={credentials.sectionNumber}
      title={credentials.sectionTitle}
      telemetryRight="VERIFIED METRICS // HACKATHONS // CERTIFICATIONS"
      headline={
        <>
          PROVEN{" "}
          <span className="font-serif-accent italic font-normal text-[var(--gold)]">
            distinction
          </span>
          .
        </>
      }
      subhead="COMPETITIVE PROGRAMMING, NATIONAL HACKATHONS & FORMAL CREDENTIALS"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Coding Profiles & Metrics */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="font-mono text-xs text-[var(--gold)] uppercase tracking-wider flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>COMPETITIVE CODING METRICS:</span>
          </h3>

          {credentials.codingProfiles.map((cp, idx) => (
            <HudPanel key={idx} className="p-6 bg-[var(--graphite)]/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)]">
                    {cp.iconName === "Database" ? (
                      <Database className="w-6 h-6" />
                    ) : (
                      <Code2 className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-[var(--bone)]">{cp.platform}</h4>
                    <p className="font-mono text-xs text-[var(--gold)] font-semibold mt-0.5">
                      {cp.stats}
                    </p>
                  </div>
                </div>

                <a
                  href={cp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-[var(--line)] bg-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                  aria-label={`View Dev Jashani on ${cp.platform}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </HudPanel>
          ))}

          {/* Certifications Block */}
          <h3 className="font-mono text-xs text-[var(--gold)] uppercase tracking-wider flex items-center gap-2 mt-4">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CERTIFICATIONS:</span>
          </h3>

          <div className="space-y-3">
            {credentials.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 bg-[var(--graphite)]/60 border border-[var(--line)] rounded-sm flex items-center justify-between"
              >
                <div className="space-y-1">
                  <h4 className="font-display text-base text-[var(--bone)] tracking-wide">
                    {cert.name}
                  </h4>
                  <p className="font-mono text-[11px] text-[var(--mute)]">
                    {cert.issuer} • <span className="text-[var(--gold)]">{cert.period}</span>
                  </p>
                </div>
                <Award className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hackathon Leadership */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="font-mono text-xs text-[var(--gold)] uppercase tracking-wider flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>LEADERSHIP & RECOGNITION:</span>
          </h3>

          <div className="space-y-4">
            {credentials.achievements.map((ach, idx) => (
              <HudPanel key={idx} glow={idx === 1} className="p-6 bg-[var(--graphite)]/85">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[var(--ink)] border border-[var(--line)] text-[9px] font-mono text-[var(--gold)] font-bold">
                        {ach.badge}
                      </span>
                    </div>
                    <h4 className="font-display text-2xl text-[var(--bone)]">{ach.title}</h4>
                    <p className="font-mono text-xs text-[var(--mute)]">{ach.event}</p>
                  </div>

                  <Trophy className="w-6 h-6 text-[var(--gold)] self-start sm:self-center opacity-80" />
                </div>
              </HudPanel>
            ))}
          </div>

          <HudPanel className="mt-4 p-6 bg-[var(--graphite)]/40">
            <h4 className="font-display text-xl text-[var(--bone)] mb-1">
              ENGINEERING REPUTATION
            </h4>
            <p className="text-xs text-[var(--mute)] leading-relaxed font-sans">
              Consistently demonstrated leadership in high-pressure hackathon sprints, combined with a commitment to algorithmic problem-solving and knowledge sharing.
            </p>
          </HudPanel>
        </div>
      </div>
    </SectionShell>
  );
}
