"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MagneticCursor() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches || reducedMotion) {
      return;
    }

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button";

        setIsPointer(Boolean(isClickable));
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [reducedMotion, isVisible]);

  if (!mounted || reducedMotion) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-[var(--gold)] mix-blend-difference"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isPointer ? 1.8 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Lagging outer telemetry ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[var(--gold)]/60 mix-blend-screen"
        animate={{
          x: mousePos.x - (isPointer ? 22 : 14),
          y: mousePos.y - (isPointer ? 22 : 14),
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          borderColor: isPointer ? "var(--ember)" : "rgba(200, 169, 106, 0.6)",
          opacity: isVisible ? 0.7 : 0
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>
  );
}
