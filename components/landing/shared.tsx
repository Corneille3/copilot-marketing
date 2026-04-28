import type { ReactNode } from "react";

export function SectionShell({
  id,
  bg = "bg-bone",
  text = "text-ink",
  children,
}: {
  id?: string;
  bg?: string;
  text?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-b border-rule ${bg} ${text} py-24 lg:py-36`}
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  eyebrowColor = "text-sienna",
}: {
  eyebrow: string;
  title: ReactNode;
  eyebrowColor?: string;
}) {
  return (
    <div className="reveal mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-3">
        <p
          className={`font-mono text-[0.6875rem] uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      </div>
      <div className="lg:col-span-9">
        <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-[3.75rem]">
          {title}
        </h2>
      </div>
    </div>
  );
}
