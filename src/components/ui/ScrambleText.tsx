"use client";

import React, { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
  speed?: number;
  delay?: number;
}

const GLYPHS = "0123456789ABCDEF_//<>[]{}#*+=-~$!%&";

export function ScrambleText({
  text,
  className = "",
  trigger = true,
  speed = 30,
  delay = 0
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const reducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(text);
      return;
    }

    if (!trigger || hasAnimated.current) return;

    let iteration = 0;
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          hasAnimated.current = true;
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, trigger, speed, delay, reducedMotion]);

  return <span className={className}>{displayText}</span>;
}
