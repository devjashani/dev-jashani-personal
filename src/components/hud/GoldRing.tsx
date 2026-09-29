"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GoldRingProps {
  className?: string;
  size?: number | string;
  showTicks?: boolean;
  reverse?: boolean;
}

export function GoldRing({
  className,
  size = 320,
  showTicks = true,
  reverse = false
}: GoldRingProps) {
  const dim = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      aria-hidden="true"
      style={{ width: dim, height: dim }}
      className={cn(
        "relative rounded-full pointer-events-none flex items-center justify-center select-none",
        className
      )}
    >
      {/* Outer 1px golden dashed track */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border border-[var(--gold)]/30 border-dashed",
          reverse ? "orbit-spin-reverse" : "orbit-spin-slow"
        )}
      />

      {/* Mid continuous hairline */}
      <div className="absolute inset-4 rounded-full border border-[var(--gold)]/20" />

      {/* Inner concentric ring */}
      <div className="absolute inset-10 rounded-full border border-[var(--gold)]/40" />

      {/* Cardinal tick accents */}
      {showTicks && (
        <>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--gold)] shadow-[0_0_8px_var(--gold)] rounded-full" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--gold)] shadow-[0_0_8px_var(--gold)] rounded-full" />
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--gold)] shadow-[0_0_8px_var(--gold)] rounded-full" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--gold)] shadow-[0_0_8px_var(--gold)] rounded-full" />
        </>
      )}
    </div>
  );
}
