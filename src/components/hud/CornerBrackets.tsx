"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CornerBracketsProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export function CornerBrackets({
  className,
  size = 8,
  strokeWidth = 1.5,
  color = "var(--gold)"
}: CornerBracketsProps) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    borderColor: color,
    borderWidth: `${strokeWidth}px`
  };

  return (
    <>
      <span
        style={style}
        className={cn(
          "absolute -top-[1px] -left-[1px] border-t border-l border-r-0 border-b-0 pointer-events-none transition-all duration-300",
          className
        )}
        aria-hidden="true"
      />
      <span
        style={style}
        className={cn(
          "absolute -top-[1px] -right-[1px] border-t border-r border-l-0 border-b-0 pointer-events-none transition-all duration-300",
          className
        )}
        aria-hidden="true"
      />
      <span
        style={style}
        className={cn(
          "absolute -bottom-[1px] -left-[1px] border-b border-l border-r-0 border-t-0 pointer-events-none transition-all duration-300",
          className
        )}
        aria-hidden="true"
      />
      <span
        style={style}
        className={cn(
          "absolute -bottom-[1px] -right-[1px] border-b border-r border-l-0 border-t-0 pointer-events-none transition-all duration-300",
          className
        )}
        aria-hidden="true"
      />
    </>
  );
}
