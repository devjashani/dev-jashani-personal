"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CornerBrackets } from "../hud/CornerBrackets";
import { siteContent } from "@/content/site";

const BOOT_LOGS = [
  "KERNEL_BOOT // 2026.09.30",
  "INITIALIZING BACKEND SUBSYSTEMS [JAVA 21 / SPRING BOOT]...",
  "RESOLVING TELEMETRY // INDIA [20.5937° N, 78.9629° E]...",
  "MOUNTING DISTRIBUTED RUNTIME [POSTGRESQL // MICROSERVICES]..."
];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [visible, setVisible] = useState(true);

  const finishBoot = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("devjashani_booted", "true");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    setVisible(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    // Check session storage first
    if (typeof window !== "undefined") {
      const hasBooted = sessionStorage.getItem("devjashani_booted");
      if (hasBooted) {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        setVisible(false);
        onComplete?.();
        return;
      }

      // Lock scroll while preloader is active
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    // Step through boot lines
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 280);

    // Progress percentage
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 8;
      });
    }, 70);

    // Resolve into final name at 1.1s
    const resolveTimer = setTimeout(() => {
      setResolved(true);
    }, 1100);

    // Complete whole preloader before 2s (at 1.75s)
    const endTimer = setTimeout(() => {
      finishBoot();
    }, 1750);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishBoot();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
      clearTimeout(resolveTimer);
      clearTimeout(endTimer);
      window.removeEventListener("keydown", handleKeyDown);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, [finishBoot, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.35, ease: "easeInOut" }
          }}
          onClick={finishBoot}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--ink)] p-6 cursor-pointer select-none"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 sci-fi-grid opacity-30 pointer-events-none" />

          {/* Central Terminal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg p-8 bg-[var(--graphite)] border border-[var(--line)] shadow-2xl"
          >
            <CornerBrackets size={12} color="var(--gold)" />

            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-6 font-mono text-xs text-[var(--mute)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                <span className="text-[var(--gold)] font-bold">BOOT SEQUENCE</span>
              </div>
              <span className="text-[10px]">ESC / CLICK TO BYPASS</span>
            </div>

            {/* Boot lines or Final Name Resolution */}
            <div className="min-h-[120px] flex flex-col justify-center">
              {!resolved ? (
                <div className="space-y-2 font-mono text-xs sm:text-sm">
                  {BOOT_LOGS.slice(0, currentLine + 1).map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-[var(--gold)] select-none">{">"}</span>
                      <span
                        className={
                          index === currentLine
                            ? "text-[var(--bone)] font-semibold"
                            : "text-[var(--mute)]"
                        }
                      >
                        {log}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-2 space-y-1"
                >
                  <span className="block font-mono text-[10px] tracking-widest text-[var(--gold)] uppercase">
                    SYSTEM IDENTITY VERIFIED
                  </span>
                  <p className="font-display text-4xl sm:text-5xl text-[var(--bone)] tracking-wider">
                    {siteContent.personal.name.toUpperCase()}
                  </p>
                  <p className="font-mono text-xs text-[var(--mute)] uppercase tracking-widest">
                    {siteContent.personal.role} {"//"} 2026
                  </p>
                </motion.div>
              )}
            </div>

            {/* Progress Bar & Telemetry */}
            <div className="mt-8 space-y-2">
              <div className="flex justify-between font-mono text-xs text-[var(--mute)]">
                <span>SYSTEM SYNCHRONIZATION</span>
                <span className="text-[var(--gold)] font-bold tabular-nums">{progress}%</span>
              </div>
              <div className="h-1 w-full bg-[var(--line)] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--ember)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Skip Button */}
            <button
              onClick={finishBoot}
              className="mt-6 w-full text-center font-mono text-[10px] tracking-widest text-[var(--mute)] hover:text-[var(--gold)] uppercase transition-colors"
            >
              [ CLICK ANYWHERE TO BYPASS SEQUENCE ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
