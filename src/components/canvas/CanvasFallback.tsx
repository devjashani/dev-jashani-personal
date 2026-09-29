"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CornerBrackets } from "../hud/CornerBrackets";

export function CanvasFallback() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[500px] flex items-center justify-center overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--graphite)]/40">
      <CornerBrackets size={12} color="var(--gold)" />

      {/* Halftone / Dithered Image Stage or Procedural Gradient */}
      <div className="relative w-full h-full max-w-4xl aspect-[16/9] flex items-center justify-center">
        {!hasError ? (
          <Image
            src="/assets/hero-hands.png"
            alt="Monochrome halftone dithered human hand reaching toward a robotic hand"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            onError={() => setHasError(true)}
            className="object-contain filter contrast-125 brightness-95 opacity-90 transition-transform duration-700 ease-out hover:scale-105"
          />
        ) : (
          /* Procedural Dithered Gradient Fallback */
          <div
            className="w-full h-full flex items-center justify-center sci-fi-grid"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(200, 169, 106, 0.15), rgba(18, 19, 22, 0.95) 70%)"
            }}
          >
            <div className="text-center font-mono text-xs text-[var(--gold)]">
              <span>PROCEDURAL_DITHER // ACTIVE</span>
            </div>
          </div>
        )}

        {/* Central ember spark pulse */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-[var(--ember)] shadow-[0_0_20px_6px_var(--ember)] animate-ping opacity-75" />
            <span className="absolute w-2 h-2 rounded-full bg-[var(--gold)] shadow-[0_0_12px_3px_var(--gold)]" />
            <span className="absolute w-12 h-12 rounded-full border border-[var(--gold)]/30 animate-pulse" />
          </div>
        </div>

        {/* HUD Data Overlay */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2.5 py-1 bg-[var(--ink)]/80 border border-[var(--line)] text-[10px] font-mono text-[var(--gold)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
          <span>SYNAPSE_LINK // ACTIVE</span>
        </div>

        <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 px-2.5 py-1 bg-[var(--ink)]/80 border border-[var(--line)] text-[10px] font-mono text-[var(--mute)]">
          <span>PRECISION: 99.98%</span>
        </div>
      </div>
    </div>
  );
}
