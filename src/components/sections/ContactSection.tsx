"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import { SectionShell } from "../ui/SectionShell";
import { HudPanel } from "../ui/HudPanel";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  FileDown,
  Terminal,
  Send,
  Phone
} from "lucide-react";

export function ContactSection() {
  const { contact, personal } = siteContent;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SectionShell
      id="contact"
      number={contact.sectionNumber}
      title={contact.sectionTitle}
      telemetryRight="TRANSMISSION TERMINAL // DIRECT FREQUENCY"
      className="overflow-hidden"
    >
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[var(--bone)] tracking-tight leading-none">
          {contact.headlineRegular}{" "}
          <span className="font-serif-accent italic font-normal text-[var(--gold)]">
            {contact.headlineItalic}
          </span>
          .
        </h2>
        <p className="mt-6 text-sm sm:text-base text-[var(--mute)] font-sans max-w-xl mx-auto leading-relaxed">
          {contact.subtext}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <HudPanel glow className="p-8 sm:p-12 bg-[var(--graphite)]/90">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Direct Email Display with Copy Action */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-[var(--ink)] border border-[var(--line)] rounded-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--graphite)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-[10px] text-[var(--mute)] uppercase tracking-wider">
                    PRIMARY TRANSMISSION ADDRESS
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-mono text-sm sm:text-lg text-[var(--bone)] font-semibold hover:text-[var(--gold)] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--line)] bg-[var(--graphite)] hover:border-[var(--gold)] hover:text-[var(--gold)] text-xs font-mono text-[var(--bone)] transition-all rounded-sm cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--gold)] text-[var(--ink)] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[var(--bone)] transition-colors shadow-md"
                >
                  <span>SEND</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Telephone Node */}
            {personal.phone && (
              <div className="w-full flex items-center justify-between p-3.5 bg-[var(--ink)] border border-[var(--line)] rounded-sm text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--graphite)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] text-[var(--mute)] uppercase tracking-wider">
                      DIRECT VOICE NODE
                    </span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm text-[var(--bone)] hover:text-[var(--gold)] transition-colors font-semibold"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personal.phone}`}
                  className="px-3 py-1 border border-[var(--line)] bg-[var(--graphite)] text-[10px] text-[var(--gold)] rounded-sm hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all uppercase"
                >
                  CALL NODE
                </a>
              </div>
            )}

            {/* Download & View Resume Actions */}
            <div className="w-full pt-4 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--mute)]">
                <Terminal className="w-4 h-4 text-[var(--gold)]" />
                <span>OFFICIAL CURRICULUM VITAE // VERIFIED PDF</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--graphite)] text-xs font-mono text-[var(--bone)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>VIEW CV</span>
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Dev-Jashani-Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--gold)] text-[var(--ink)] text-xs font-mono font-bold hover:bg-[var(--bone)] transition-all cursor-pointer shadow-md"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>

            {/* Social Channels Network */}
            <div className="w-full pt-6 border-t border-[var(--line)]">
              <span className="block font-mono text-[10px] text-[var(--mute)] uppercase tracking-widest mb-4">
                CONNECTED NODES & FREQUENCIES
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {contact.socials.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Dev Jashani on ${social.label}`}
                    className="group flex flex-col p-3 bg-[var(--ink)] border border-[var(--line)] rounded-sm hover:border-[var(--gold)] transition-all text-left"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--mute)] group-hover:text-[var(--gold)]">
                      <span>{social.label}</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <span className="font-mono text-xs text-[var(--bone)] font-medium mt-1 truncate">
                      {social.username}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </HudPanel>
      </div>
    </SectionShell>
  );
}
