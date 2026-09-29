"use client";

import React, { useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CornerBrackets } from "../hud/CornerBrackets";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  showBrackets?: boolean;
  spotlight?: boolean;
}

export function TiltCard({
  children,
  className = "",
  showBrackets = true,
  spotlight = true
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: reducedMotion
          ? "none"
          : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s ease-out"
      }}
      className={cn(
        "relative rounded-sm bg-[var(--graphite)]/85 backdrop-blur-xl border border-[var(--line)] overflow-hidden transition-colors duration-300",
        className
      )}
    >
      {showBrackets && <CornerBrackets size={8} color="rgba(200,169,106,0.6)" />}

      {/* Spotlight follower */}
      {spotlight && isHovered && !reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 169, 106, 0.12), transparent 80%)`
          }}
        />
      )}

      {children}
    </div>
  );
}
