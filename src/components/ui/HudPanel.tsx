"use client";

import React from "react";
import { CornerBrackets } from "../hud/CornerBrackets";
import { cn } from "@/lib/utils";

interface HudPanelProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  cornerSize?: number;
  cornerColor?: string;
  headerLabel?: string;
  headerTelemetry?: string;
}

export function HudPanel({
  children,
  className = "",
  glow = false,
  cornerSize = 8,
  cornerColor = "rgba(200, 169, 106, 0.7)",
  headerLabel,
  headerTelemetry
}: HudPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-sm transition-all duration-300",
        glow ? "glass-panel-glow" : "glass-panel",
        className
      )}
    >
      <CornerBrackets size={cornerSize} color={cornerColor} />

      {(headerLabel || headerTelemetry) && (
        <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-2 text-[10px] font-mono text-[var(--mute)]">
          {headerLabel && (
            <span className="text-[var(--gold)] font-bold uppercase">{headerLabel}</span>
          )}
          {headerTelemetry && <span className="uppercase">{headerTelemetry}</span>}
        </div>
      )}

      {children}
    </div>
  );
}
