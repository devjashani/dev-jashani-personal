"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";
import { Preloader } from "@/components/sections/Preloader";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { VerticalNav } from "@/components/hud/VerticalNav";
import { StatusWidget } from "@/components/hud/StatusWidget";
import { ScrollProgress } from "@/components/hud/ScrollProgress";
import { MagneticCursor } from "@/components/hud/MagneticCursor";

export default function Home() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      {/* Session-cached 2035 Terminal Boot Preloader */}
      <Preloader />

      {/* Interactive Custom Desktop Cursor */}
      <MagneticCursor />

      {/* Persistent Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Persistent Top Navigation Bar */}
      <Header />

      {/* Persistent Left HUD Icon Dock */}
      <VerticalNav />

      {/* Persistent Bottom Right Live Telemetry Widget */}
      <StatusWidget />

      {/* Main Single Page Document */}
      <main id="main-content" className="relative z-10 w-full min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
