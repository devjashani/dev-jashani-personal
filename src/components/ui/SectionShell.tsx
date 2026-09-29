"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  number: string;
  title: string;
  telemetryRight?: string;
  headline?: React.ReactNode;
  subhead?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  number,
  title,
  telemetryRight,
  headline,
  subhead,
  children,
  className
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-label={`${number} ${title}`}
      className={cn("relative py-28 border-b border-[var(--line)]", className)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section Header with Hairline & Telemetry */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--gold)] font-bold tracking-widest uppercase">
            {number} {"//"} {title}
          </span>
          <div className="h-[1px] flex-1 bg-[var(--line)]" />
          {telemetryRight && (
            <span className="font-mono text-[10px] text-[var(--mute)] uppercase hidden sm:inline">
              {telemetryRight}
            </span>
          )}
        </div>

        {/* Optional Section Headline & Subhead */}
        {(headline || subhead) && (
          <div className="max-w-3xl mb-14">
            {headline && (
              <h2 className="font-display text-4xl sm:text-6xl text-[var(--bone)] tracking-tight leading-tight">
                {headline}
              </h2>
            )}
            {subhead && (
              <p className="mt-3 font-mono text-xs sm:text-sm text-[var(--mute)] uppercase tracking-wider">
                {subhead}
              </p>
            )}
          </div>
        )}

        {/* Section Body */}
        {children}
      </div>
    </section>
  );
}
