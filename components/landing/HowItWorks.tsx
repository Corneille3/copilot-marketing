"use client";

import { useEffect, useRef, useState } from "react";
import { SectionShell, SectionHead } from "./shared";

const STEPS = [
  {
    n: "i.",
    title: "Ingest your sources",
    body: "Upload firm documents — memos, workpapers, internal guidance. We combine them with a curated corpus of authoritative Canadian sources: CRA, FINTRAC, OSC, PIPEDA, ASPE, CSAE. All stored in tenant-isolated Canadian infrastructure.",
  },
  {
    n: "ii.",
    title: "Retrieve with authority",
    body: "Hybrid retrieval (BM25 + vector) surfaces the right passages. Authority-aware reranking ensures a CRA bulletin outranks a draft internal memo — automatically. 0.95 context precision on benchmark evaluations.",
  },
  {
    n: "iii.",
    title: "Answer with evidence",
    body: "Every claim is cited back to a specific source and page. If no grounded answer exists, the system says so — instead of guessing. Every question, retrieval, and answer is logged for audit.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveStep(idx);
          });
        },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <SectionShell id="how">
      <SectionHead
        eyebrow="— 02 / How it works"
        title={
          <>
            Three stages.{" "}
            <em className="italic font-normal text-sienna">No hallucinations.</em>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — sticky visual */}
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-32 lg:h-[36rem]">
            <div className="relative h-full min-h-[24rem] overflow-hidden border border-rule bg-bone-2">
              <IngestLayer active={activeStep === 0} />
              <RetrieveLayer active={activeStep === 1} />
              <AnswerLayer active={activeStep === 2} />
            </div>
          </div>
        </div>

        {/* RIGHT — scrolling steps */}
        <div className="flex flex-col gap-24 pt-8 lg:col-span-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.n}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className="reveal flex min-h-[20rem] flex-col justify-center"
            >
              <span className="mb-4 font-display text-6xl font-normal italic leading-none text-sienna">
                {step.n}
              </span>
              <h3 className="mb-4 font-display text-3xl font-light leading-[1.1] tracking-[-0.01em] md:text-4xl">
                {step.title}
              </h3>
              <p className="max-w-prose text-base leading-[1.65] text-muted lg:text-[1.0625rem]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ============ Animated layers ============ */

function LayerWrapper({
  active,
  label,
  children,
}: {
  active: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="absolute left-6 top-6 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-sienna">
        {label}
      </span>
      <div className="w-3/5 max-w-xs">{children}</div>
    </div>
  );
}

function IngestLayer({ active }: { active: boolean }) {
  return (
    <LayerWrapper active={active} label="— Step i / Ingest">
      <svg
        viewBox="0 0 320 280"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-ink"
      >
        <style>{`
          @keyframes ingestFall {
            0% { transform: translateY(-40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .ingest-doc { animation: ingestFall 1.5s ease infinite alternate; }
        `}</style>

        {/* Doc 1 */}
        <g className="ingest-doc" style={{ animationDelay: "0s" }}>
          <rect x="40" y="40" width="80" height="100" stroke="#1c1b17" fill="#f5f1e8" />
          <line x1="50" y1="55" x2="110" y2="55" stroke="#6b665c" strokeWidth="0.5" />
          <line x1="50" y1="65" x2="110" y2="65" stroke="#6b665c" strokeWidth="0.5" />
          <line x1="50" y1="75" x2="95" y2="75" stroke="#6b665c" strokeWidth="0.5" />
        </g>

        {/* Doc 2 */}
        <g className="ingest-doc" style={{ animationDelay: "0.3s" }}>
          <rect x="140" y="30" width="80" height="100" stroke="#1c1b17" fill="#f5f1e8" />
          <line x1="150" y1="45" x2="210" y2="45" stroke="#6b665c" strokeWidth="0.5" />
          <line x1="150" y1="55" x2="210" y2="55" stroke="#6b665c" strokeWidth="0.5" />
          <line x1="150" y1="65" x2="195" y2="65" stroke="#6b665c" strokeWidth="0.5" />
        </g>

        {/* Doc 3 */}
        <g className="ingest-doc" style={{ animationDelay: "0.6s" }}>
          <rect x="90" y="150" width="80" height="100" stroke="#1c1b17" fill="#f5f1e8" />
          <line x1="100" y1="165" x2="160" y2="165" stroke="#6b665c" strokeWidth="0.5" />
          <line x1="100" y1="175" x2="160" y2="175" stroke="#6b665c" strokeWidth="0.5" />
          <line x1="100" y1="185" x2="145" y2="185" stroke="#6b665c" strokeWidth="0.5" />
        </g>

        {/* Index target */}
        <path
          d="M 240 140 L 280 140 M 270 130 L 280 140 L 270 150"
          stroke="#b84a2e"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="240"
          y="100"
          width="60"
          height="80"
          fill="none"
          stroke="#b84a2e"
          strokeDasharray="2 3"
        />
        <text
          x="270"
          y="145"
          fontFamily="IBM Plex Mono"
          fontSize="8"
          fill="#b84a2e"
          textAnchor="middle"
        >
          INDEX
        </text>
      </svg>
    </LayerWrapper>
  );
}

function RetrieveLayer({ active }: { active: boolean }) {
  return (
    <LayerWrapper active={active} label="— Step ii / Retrieve">
      <svg viewBox="0 0 320 280" fill="none">
        <style>{`
          @keyframes rankRise {
            0% { transform: translateY(60px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .rank { animation: rankRise 1.2s ease infinite alternate; }
        `}</style>

        <g className="rank" style={{ animationDelay: "0s" }}>
          <rect x="60" y="60" width="200" height="36" fill="#b84a2e" stroke="#b84a2e" />
          <text
            x="160"
            y="82"
            fontFamily="IBM Plex Mono"
            fontSize="9"
            fill="#f5f1e8"
            textAnchor="middle"
          >
            CRA · Authority 1.0
          </text>
        </g>

        <g className="rank" style={{ animationDelay: "0.15s" }}>
          <rect x="60" y="108" width="200" height="32" fill="#ebe6d7" stroke="#1c1b17" />
          <text
            x="160"
            y="128"
            fontFamily="IBM Plex Mono"
            fontSize="9"
            fill="#1c1b17"
            textAnchor="middle"
          >
            Statute · 0.95
          </text>
        </g>

        <g className="rank" style={{ animationDelay: "0.3s" }}>
          <rect x="60" y="152" width="200" height="32" fill="#ebe6d7" stroke="#1c1b17" />
          <text
            x="160"
            y="172"
            fontFamily="IBM Plex Mono"
            fontSize="9"
            fill="#6b665c"
            textAnchor="middle"
          >
            Interpretation · 0.72
          </text>
        </g>

        <g className="rank" style={{ animationDelay: "0.45s" }}>
          <rect
            x="60"
            y="196"
            width="200"
            height="32"
            fill="#ebe6d7"
            stroke="#1c1b17"
            opacity="0.6"
          />
          <text
            x="160"
            y="216"
            fontFamily="IBM Plex Mono"
            fontSize="9"
            fill="#6b665c"
            textAnchor="middle"
          >
            Internal memo · 0.55
          </text>
        </g>
      </svg>
    </LayerWrapper>
  );
}

function AnswerLayer({ active }: { active: boolean }) {
  return (
    <LayerWrapper active={active} label="— Step iii / Answer">
      <svg viewBox="0 0 320 280" fill="none">
        <style>{`
          @keyframes citePulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .cite-box { animation: citePulse 2s ease infinite; }
        `}</style>

        <rect x="30" y="40" width="260" height="180" fill="#f5f1e8" stroke="#1c1b17" />
        <line x1="45" y1="65" x2="275" y2="65" stroke="#6b665c" strokeWidth="0.6" />
        <line x1="45" y1="80" x2="275" y2="80" stroke="#6b665c" strokeWidth="0.6" />
        <line x1="45" y1="95" x2="230" y2="95" stroke="#6b665c" strokeWidth="0.6" />

        <rect className="cite-box" x="233" y="88" width="22" height="14" fill="#b84a2e" />
        <text
          x="244"
          y="98"
          fontFamily="IBM Plex Mono"
          fontSize="7"
          fill="#f5f1e8"
          textAnchor="middle"
        >
          S1
        </text>

        <line x1="45" y1="120" x2="275" y2="120" stroke="#6b665c" strokeWidth="0.6" />
        <line x1="45" y1="135" x2="180" y2="135" stroke="#6b665c" strokeWidth="0.6" />

        <rect
          className="cite-box"
          x="183"
          y="128"
          width="22"
          height="14"
          fill="#b84a2e"
          style={{ animationDelay: "0.5s" }}
        />
        <text
          x="194"
          y="138"
          fontFamily="IBM Plex Mono"
          fontSize="7"
          fill="#f5f1e8"
          textAnchor="middle"
        >
          S2
        </text>

        <line x1="45" y1="175" x2="275" y2="175" stroke="#b84a2e" strokeDasharray="2 2" />
        <text x="45" y="195" fontFamily="IBM Plex Mono" fontSize="8" fill="#6b665c">
          SOURCES: RC4022, ETA s.148
        </text>
        <text x="45" y="208" fontFamily="IBM Plex Mono" fontSize="7" fill="#b84a2e">
          ✓ Audit logged · 12:34 UTC
        </text>
      </svg>
    </LayerWrapper>
  );
}
