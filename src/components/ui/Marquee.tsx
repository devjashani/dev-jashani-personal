"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speedSeconds?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  children,
  className = "",
  speedSeconds = 25,
  pauseOnHover = true,
  reverse = false
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden select-none border-y border-[var(--line)] bg-[var(--graphite)]/30 backdrop-blur-sm py-4",
        className
      )}
    >
      <div
        className={cn(
          "flex gap-8 whitespace-nowrap animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speedSeconds}s`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        <div className="flex items-center gap-8">{children}</div>
        <div className="flex items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
