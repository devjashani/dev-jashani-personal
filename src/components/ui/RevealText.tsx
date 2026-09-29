"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function RevealText({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  as: Tag = "div"
}: RevealTextProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={cn("overflow-hidden block", className)}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for snappy, cinematic deceleration
        }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
