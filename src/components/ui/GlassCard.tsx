"use client";

import React from "react";
import { CornerBrackets } from "../hud/CornerBrackets";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  showBrackets?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  showBrackets = true,
  glow = false
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-sm transition-all duration-300",
        glow ? "glass-panel-glow" : "glass-panel",
        className
      )}
    >
      {showBrackets && <CornerBrackets size={8} color="rgba(200,169,106,0.7)" />}
      {children}
    </div>
  );
}
