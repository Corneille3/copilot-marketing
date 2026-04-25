import { APP_URL, DEMO_URL } from "@/lib/urls";

export function CTASection() {
  return (
    <section
      id="demo"
      className="cta-radial relative overflow-hidden border-b border-rule bg-bone py-24 lg:py-36"
    >
      <div className="reveal relative mx-auto grid max-w-container gap-8 px-6 lg:grid-cols-12 lg:items-end lg:px-12">
        <div className="lg:col-span-3">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-sienna">
            — 08 / Next step
          </p>
        </div>
        <div className="lg:col-span-9">
          <h2 className="font-display text-4xl font-light leading-none tracking-[-0.02em] md:text-5xl lg:text-[5rem]">
            See Korneva
            <br />
            <em className="italic font-normal text-sienna">in action.</em>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
            Book a 30-minute live demo. We&apos;ll walk through your real
            questions on real documents — and tell you honestly whether it fits
            your firm&apos;s workflow. Reply within two business days.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={DEMO_URL}
              className="group inline-flex items-center gap-3 bg-sienna px-7 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-bone transition-colors hover:bg-ink"
            >
              Book a demo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`${APP_URL}/onboarding`}
              className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:border-sienna hover:text-sienna"
            >
              Sign in / Start onboarding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
