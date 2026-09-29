"use client";

import React, { useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CornerBrackets } from "../hud/CornerBrackets";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  showBrackets?: boolean;
  spotlightColor?: string;
  tilt?: boolean;
}

export function SpotlightCard({
  children,
  className = "",
  showBrackets = true,
  spotlightColor = "rgba(200, 169, 106, 0.14)",
  tilt = true
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (tilt && !reducedMotion) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -5;
      const rotY = ((x - centerX) / centerX) * 5;
      setRotate({ x: rotX, y: rotY });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          tilt && !reducedMotion
            ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
            : "none",
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.4s ease-out"
      }}
      className={cn(
        "relative rounded-sm bg-[var(--graphite)]/85 backdrop-blur-xl border border-[var(--line)] overflow-hidden transition-colors duration-300",
        className
      )}
    >
      {showBrackets && <CornerBrackets size={8} color="rgba(200, 169, 106, 0.6)" />}

      {/* Radial Spotlight Follower */}
      {isHovered && !reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`
          }}
        />
      )}

      {children}
    </div>
  );
}
