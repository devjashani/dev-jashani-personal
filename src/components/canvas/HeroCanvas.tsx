"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { CanvasFallback } from "./CanvasFallback";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CornerBrackets } from "../hud/CornerBrackets";

// Lazy-load the entire WebGL scene
const HandsScene = dynamic(
  () => import("./HandsScene").then((mod) => mod.HandsScene),
  {
    ssr: false,
    loading: () => <CanvasFallback />
  }
);

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 1024 ||
        window.matchMedia("(pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0
      );
    };

    checkMobile();

    const timer = setTimeout(() => {
      setMounted(true);
    }, 200);

    const onScroll = () => {
      const vh = window.innerHeight;
      const progress = Math.min(1.0, Math.max(0, window.scrollY / vh));
      setScrollProgress(progress);
    };

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || reducedMotion) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = -(((e.clientY - top) / height) * 2 - 1);
    setMouse({ x, y });
  };

  // Immediate static fallback for mobile, reduced-motion, and before mount
  if (!mounted || isMobile || reducedMotion) {
    return <CanvasFallback />;
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[460px] lg:min-h-[540px] flex items-center justify-center overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--graphite)]/30 backdrop-blur-sm"
    >
      <CornerBrackets size={12} color="var(--gold)" />

      {/* Top telemetry bar */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2.5 py-1 bg-[var(--ink)]/85 border border-[var(--line)] text-[10px] font-mono text-[var(--gold)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
        <span>R3F // WEBGL_ACTIVE</span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-2.5 py-1 bg-[var(--ink)]/85 border border-[var(--line)] text-[10px] font-mono text-[var(--mute)]">
        <span>CONVERGENCE: {Math.round(scrollProgress * 100)}%</span>
      </div>

      <CanvasErrorBoundary>
        <Suspense fallback={<CanvasFallback />}>
          <HandsScene mouse={mouse} scrollProgress={scrollProgress} />
        </Suspense>
      </CanvasErrorBoundary>

      {/* Bottom spark telemetry */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-[10px] font-mono text-[var(--mute)]">
        <span className="text-[var(--ember)] font-bold">●</span>
        <span>SYNAPSE_SPARK: NOMINAL</span>
      </div>
    </div>
  );
}
