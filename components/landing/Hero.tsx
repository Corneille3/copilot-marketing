import type { CSSProperties, ReactNode } from "react";
import { DEMO_URL } from "@/lib/urls";

const heroMotionImages = [
  "/A%20premium%20tech-forward%20visual%20showing%20tax%20and%20filing%20research%20through%20intelligent%20knowledge%20systems%2C%20structured%20financial%20records%2C%20connected%20advisory%20workflows%2C%20and%20organized%20digital%20analysis%20in%20a%20(2).png",
  "/A%20premium%20tech-forward%20visual%20showing%20tax%20and%20filing%20research%20through%20intelligent%20knowledge%20systems%2C%20structured%20financial%20records%2C%20connected%20advisory%20workflows%2C%20and%20organized%20digital%20analysis%20in%20a%20(6).png",
  "/A%20premium%20tech-forward%20visual%20showing%20tax%20and%20filing%20research%20through%20intelligent%20knowledge%20systems%2C%20structured%20financial%20records%2C%20connected%20advisory%20workflows%2C%20and%20organized%20digital%20analysis%20in%20a%20(7).png",
  "/A%20premium%20tech-forward%20visual%20showing%20tax%20and%20filing%20research%20through%20intelligent%20knowledge%20systems%2C%20structured%20financial%20records%2C%20connected%20advisory%20workflows%2C%20and%20organized%20digital%20analysis%20in%20a%20(8).png",
  "/A%20premium%20tech-forward%20visual%20showing%20tax%20and%20filing%20research%20through%20intelligent%20knowledge%20systems%2C%20structured%20financial%20records%2C%20connected%20advisory%20workflows%2C%20and%20organized%20digital%20analysis%20in%20a%20(10).png",
] as const;

export function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen overflow-hidden bg-ink pb-20 pt-32 text-bone lg:pt-40"
    >
      {/* Background media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-motion-stack absolute inset-0" aria-hidden="true">
          {heroMotionImages.map((src, index) => (
            <div
              key={src}
              className="hero-motion-frame"
              style={
                {
                  backgroundImage: `url("${src}")`,
                  animationDelay: `-${index * 3.6}s, -${index * 3.6}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="hero-motion-tint absolute inset-0" aria-hidden="true" />
        <div
          className="hero-grain absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="hero-overlay-grad absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[2] mx-auto grid max-w-container items-center gap-12 px-6 lg:grid-cols-12 lg:px-12">
        {/* LEFT — copy */}
        <div className="lg:col-span-7">
          <div className="animate-fade-up delay-1 inline-flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-sienna">
            <span className="inline-block h-px w-8 bg-current" />
            <span>Grounded AI · Canadian-hosted</span>
          </div>

          <h1 className="animate-fade-up delay-2 mt-6 font-display text-[2.5rem] font-light leading-none tracking-[-0.02em] text-bone md:text-6xl lg:text-[5.75rem]">
            Compliance research,
            <br />
            answered with{" "}
            <em className="italic font-normal text-sienna">evidence.</em>
          </h1>

          <p className="animate-fade-up delay-3 mt-8 max-w-xl text-base leading-relaxed text-bone/85 md:text-lg lg:text-xl">
            Korneva is a multi-tenant AI research copilot for accounting,
            legal, and regulated firms. Cited answers from authoritative
            sources and your firm&apos;s own documents — no hallucinations, no
            data leaving Canada.
          </p>

          <div className="animate-fade-up delay-4 mt-10 flex flex-wrap items-center gap-6">
            <a
              href={DEMO_URL}
              className="group inline-flex items-center gap-3 bg-sienna px-7 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-bone transition-colors hover:bg-ink"
            >
              Book a demo
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 border-b border-bone pb-1 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-bone transition-colors hover:border-sienna hover:text-sienna"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* RIGHT — animated preview card */}
        <div className="animate-fade-up delay-5 lg:col-span-5">
          <PreviewCard />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#problem"
        className="animate-scroll-bob absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-bone/60 hover:text-bone"
        aria-label="Scroll to next section"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-current" />
      </a>
    </header>
  );
}

function PreviewCard() {
  // Stream the answer word-by-word with staggered delays
  const answerWords = [
    "A ", "person ", "is ", "a ", "small ", "supplier ", "if ", "their ",
    "total ", "taxable ", "revenues ", "are ", "$30,000 ", "or ", "less ",
    "over ", "four ", "consecutive ", "quarters ",
  ];
  const baseDelay = 800;
  const wordStep = 100;

  return (
    <div
      className="animate-card-float relative border border-rule bg-bone text-ink"
      style={{
        boxShadow:
          "0 30px 60px -20px rgba(0,0,0,0.45), 0 80px 120px -40px rgba(184,74,46,0.15)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-rule px-4 py-3 font-mono text-[0.6875rem] text-muted">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rule" />
          <span className="h-2 w-2 rounded-full bg-rule" />
          <span className="h-2 w-2 rounded-full bg-rule" />
        </div>
        <span className="ml-2 text-[0.625rem]">korneva.kouamvision.com</span>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Question */}
        <div className="border-l-2 border-sienna bg-bone-2 px-4 py-3.5 font-display text-sm italic text-ink">
          What are the GST/HST small-supplier thresholds for a consulting firm
          in Ontario?
        </div>

        {/* Answer label */}
        <span className="mt-5 block font-mono text-[0.625rem] uppercase tracking-[0.15em] text-muted">
          — Grounded answer
        </span>

        {/* Answer with streaming words */}
        <div className="mt-2 text-sm leading-relaxed text-ink">
          {answerWords.map((word, i) => (
            <span
              key={i}
              className="animate-answer-word"
              style={{ animationDelay: `${baseDelay + i * wordStep}ms` }}
            >
              {word}
            </span>
          ))}
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + answerWords.length * wordStep}ms` }}
          >
            <Cite>S1</Cite>.{" "}
          </span>
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + (answerWords.length + 2) * wordStep}ms` }}
          >
            Consulting{" "}
          </span>
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + (answerWords.length + 3) * wordStep}ms` }}
          >
            services{" "}
          </span>
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + (answerWords.length + 4) * wordStep}ms` }}
          >
            are{" "}
          </span>
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + (answerWords.length + 5) * wordStep}ms` }}
          >
            taxable{" "}
          </span>
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + (answerWords.length + 6) * wordStep}ms` }}
          >
            supplies{" "}
          </span>
          <span
            className="animate-answer-word"
            style={{ animationDelay: `${baseDelay + (answerWords.length + 7) * wordStep}ms` }}
          >
            <Cite>S2</Cite>.
          </span>
        </div>

        {/* Sources */}
        <div className="animate-fade-sources mt-5 flex flex-col gap-2 border-t border-dashed border-rule pt-4">
          <Source
            num="S1"
            text="RC4022 · General Information for GST/HST Registrants"
            authority="CRA"
          />
          <Source
            num="S2"
            text="Excise Tax Act · Part IX · s.148"
            authority="Statute"
          />
        </div>
      </div>
    </div>
  );
}

function Cite({ children }: { children: ReactNode }) {
  return (
    <span className="mx-0.5 inline-block border border-sienna/30 bg-sienna/10 px-1.5 py-0.5 align-middle font-mono text-[0.6875rem] text-sienna">
      {children}
    </span>
  );
}

function Source({
  num,
  text,
  authority,
}: {
  num: string;
  text: string;
  authority: string;
}) {
  return (
    <div className="flex items-baseline gap-3 text-xs text-muted">
      <span className="flex-shrink-0 font-mono text-[0.625rem] text-sienna">
        {num}
      </span>
      <span>{text}</span>
      <span className="ml-auto border border-rule px-1.5 py-0.5 font-mono text-[0.625rem] text-muted">
        {authority}
      </span>
    </div>
  );
}
