"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DEMO_URL, FIRM_URL } from "@/lib/urls";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroEl = document.getElementById("hero");
      const heroBottom = heroEl
        ? heroEl.offsetTop + heroEl.offsetHeight - 80
        : 600;
      setScrolled(y > 80);
      setPastHero(y > heroBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !pastHero && !scrolled;
  const onLight = pastHero;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 py-[1.125rem] transition-all duration-300 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : onLight
            ? "border-b border-rule bg-bone/90 backdrop-blur-md"
            : "border-b border-transparent bg-bone/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-8 px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-lg">
          <span
            className={`inline-grid h-7 w-7 place-items-center border text-base font-normal italic font-display transition-colors ${
              onLight
                ? "border-ink text-ink"
                : "border-bone text-bone"
            }`}
          >
            C
          </span>
          <span
            className={`font-medium tracking-tight transition-colors ${
              onLight ? "text-ink" : "text-bone"
            }`}
          >
            Compliance
            <em
              className={`not-italic font-display italic font-normal ${
                onLight ? "text-sienna" : "text-sienna"
              }`}
            >
              IQ
            </em>
          </span>
        </Link>

        <div
          className={`hidden items-center gap-9 text-sm transition-colors md:flex ${
            onLight ? "text-muted" : "text-bone/85"
          }`}
        >
          <a
            href="#problem"
            className={onLight ? "hover:text-ink" : "hover:text-bone"}
          >
            Problem
          </a>
          <a
            href="#how"
            className={onLight ? "hover:text-ink" : "hover:text-bone"}
          >
            How it works
          </a>
          <a
            href="#security"
            className={onLight ? "hover:text-ink" : "hover:text-bone"}
          >
            Security
          </a>
          <a
            href={FIRM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={onLight ? "hover:text-ink" : "hover:text-bone"}
          >
            By JKOUAM
          </a>
        </div>

        <a
          href={DEMO_URL}
          className="inline-flex items-center gap-2 bg-sienna px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-bone transition-colors hover:bg-ink"
        >
          Book a demo →
        </a>
      </div>
    </nav>
  );
}
