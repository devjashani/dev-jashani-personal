"use client";

import React from "react";
import { useISTClock } from "@/hooks/useISTClock";
import { CornerBrackets } from "./CornerBrackets";
import { siteContent } from "@/content/site";

export function StatusWidget() {
  const istTime = useISTClock();

  return (
    <aside
      aria-label="System telemetry"
      className="hidden lg:flex fixed bottom-6 right-8 z-40 items-center gap-4 bg-[var(--graphite)]/80 backdrop-blur-md border border-[var(--line)] px-4 py-2 text-xs font-mono text-[var(--mute)] shadow-2xl"
    >
      <CornerBrackets size={6} color="var(--gold)" />

      {/* Location telemetry */}
      <div className="flex items-center gap-2 border-r border-[var(--line)] pr-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
        <span className="tracking-wider uppercase text-[var(--bone)]">
          {siteContent.personal.location}
        </span>
        <span className="text-[10px] text-[var(--mute)] opacity-70">
          [{siteContent.personal.coordinates}]
        </span>
      </div>

      {/* Clock telemetry */}
      <div className="flex items-center gap-2 border-r border-[var(--line)] pr-4">
        <span className="text-[10px] text-[var(--gold)] font-bold">UTC+5:30</span>
        <span className="text-[var(--bone)] font-semibold tracking-wider tabular-nums">
          {istTime}
        </span>
      </div>

      {/* Status telemetry */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
          AVAILABLE // 2026
        </span>
      </div>
    </aside>
  );
}
