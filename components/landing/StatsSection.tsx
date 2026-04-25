"use client";

import { useEffect, useRef } from "react";

const STATS = [
  {
    label: "Context precision",
    value: 0.95,
    decimals: 2,
    caption:
      "RAGAS benchmark — how often retrieved passages actually contain the answer.",
  },
  {
    label: "Faithfulness",
    value: 0.86,
    decimals: 2,
    caption: "Claims in the answer that are supported by the cited passages.",
  },
  {
    label: "Test coverage",
    value: 125,
    decimals: 0,
    suffix: "+",
    caption:
      "Graded regulatory questions across tax, AML, privacy, and assurance.",
  },
  {
    label: "Data residency",
    value: null,
    static: "CA",
    caption: "AWS ca-central-1 by default. Bilingual source coverage.",
  },
];

export function StatsSection() {
  return (
    <section className="border-b border-rule bg-ink py-24 text-bone lg:py-36">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-sienna">
              — 07 / Benchmarked
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-bone md:text-5xl lg:text-[3.75rem]">
              Measured, not{" "}
              <em className="italic font-normal text-sienna">marketed.</em>
            </h2>
          </div>
        </div>

        <div className="reveal-stagger grid gap-12 md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  decimals = 0,
  suffix,
  static: staticValue,
  caption,
}: {
  label: string;
  value: number | null;
  decimals?: number;
  suffix?: string;
  static?: string;
  caption: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (value === null) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = value;
            const duration = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              el.textContent = current.toFixed(decimals);
              if (t < 1) requestAnimationFrame(tick);
              else el.textContent = target.toFixed(decimals);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, decimals]);

  return (
    <div className="border-t border-bone/20 pt-6">
      <span className="mb-4 block font-mono text-[0.625rem] uppercase tracking-[0.2em] text-bone/55">
        {label}
      </span>
      <span className="font-display text-[3.5rem] font-light leading-none text-sienna">
        {staticValue ? (
          <em className="italic">{staticValue}</em>
        ) : (
          <>
            <span ref={ref}>0</span>
            {suffix && <em className="italic">{suffix}</em>}
          </>
        )}
      </span>
      <p className="mt-3 text-[0.8125rem] leading-[1.55] text-bone/70">
        {caption}
      </p>
    </div>
  );
}
