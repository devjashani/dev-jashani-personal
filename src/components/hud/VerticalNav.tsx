"use client";

import React from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  Compass,
  User,
  Layers,
  Cpu,
  Briefcase,
  Award,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CornerBrackets } from "./CornerBrackets";

const navItems = [
  { id: "hero", label: "00 // Hero", icon: Compass },
  { id: "about", label: "01 // About", icon: User },
  { id: "projects", label: "02 // Projects", icon: Layers },
  { id: "stack", label: "03 // Stack", icon: Cpu },
  { id: "experience", label: "04 // Experience", icon: Briefcase },
  { id: "credentials", label: "05 // Credentials", icon: Award },
  { id: "contact", label: "06 // Contact", icon: Send }
];

export function VerticalNav() {
  const activeSection = useActiveSection(navItems.map((item) => item.id), 250);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 bg-[var(--graphite)]/75 backdrop-blur-md border border-[var(--line)] shadow-2xl rounded-sm"
    >
      <CornerBrackets size={5} color="rgba(200,169,106,0.6)" />

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Jump to ${item.label}`}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "group relative flex items-center justify-center w-9 h-9 transition-all duration-300 rounded",
              isActive
                ? "bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/40 shadow-[0_0_12px_rgba(200,169,106,0.2)]"
                : "text-[var(--mute)] hover:text-[var(--bone)] hover:bg-[var(--line)]/50"
            )}
          >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />

            {/* Indicator dot */}
            {isActive && (
              <span className="absolute -left-1 w-1 h-3 bg-[var(--gold)] rounded-r-full shadow-[0_0_6px_var(--gold)]" />
            )}

            {/* Hover Tooltip */}
            <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 bg-[var(--graphite)] border border-[var(--line)] text-[10px] font-mono tracking-wider uppercase text-[var(--bone)] opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg translate-x-1 group-hover:translate-x-0">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
