"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { SectionShell } from "../ui/SectionShell";
import { SpotlightCard } from "../ui/SpotlightCard";
import { CornerBrackets } from "../hud/CornerBrackets";
import { ExternalLink, ShieldCheck, Terminal } from "lucide-react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ProjectsSection() {
  const { projects } = siteContent;

  return (
    <SectionShell
      id="projects"
      number={projects.sectionNumber}
      title={projects.sectionTitle}
      telemetryRight="SYSTEM ARCHITECTURES // PRODUCTION CODE"
      headline={
        <>
          ENGINEERED FOR{" "}
          <span className="font-serif-accent italic font-normal text-[var(--gold)]">
            reliability
          </span>
          .
        </>
      }
      subhead="DEEP DIVE INTO PRODUCTION-GRADE ENTERPRISE BACKEND AND MOBILE ARCHITECTURES"
    >
      <div className="space-y-24">
        {projects.items.map((project, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <SpotlightCard className="p-3 bg-[var(--graphite)]/90 border-[var(--line)]">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm bg-[var(--ink)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                      <div className="px-2.5 py-1 bg-[var(--ink)]/80 backdrop-blur-sm border border-[var(--line)] text-[10px] font-mono text-[var(--gold)]">
                        <span>SYS_ID // {project.number}</span>
                      </div>
                      <div className="px-2.5 py-1 bg-[var(--ink)]/80 backdrop-blur-sm border border-[var(--line)] text-[10px] font-mono text-[var(--bone)]">
                        <span>{project.subtitle.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[var(--ink)]/85 border border-[var(--line)] text-[9px] font-mono text-[var(--bone)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              <div
                className={`lg:col-span-5 flex flex-col gap-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl text-[var(--gold)] opacity-70">
                      {project.number}
                    </span>
                    <span className="h-[1px] w-12 bg-[var(--gold)]/40" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--mute)]">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-[var(--bone)] tracking-wide">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-3 p-5 bg-[var(--graphite)]/50 border border-[var(--line)] relative">
                  <CornerBrackets size={6} color="var(--gold)" />
                  <span className="text-[10px] font-mono uppercase text-[var(--gold)] tracking-widest flex items-center gap-1.5 mb-2">
                    <Terminal className="w-3.5 h-3.5" />
                    KEY ARCHITECTURAL HIGHLIGHTS:
                  </span>
                  <ul className="space-y-2.5">
                    {project.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--bone)]/90 leading-relaxed font-sans"
                      >
                        <ShieldCheck className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bone)] text-[var(--ink)] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[var(--gold)] transition-colors shadow-md"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW CODE</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${project.title}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--line)] bg-[var(--graphite)] text-[var(--bone)] font-mono text-xs font-medium tracking-wider uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
