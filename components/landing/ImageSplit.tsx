import type { ReactNode } from "react";

export function ImageSplit({
  id,
  reverse = false,
  label,
  title,
  body,
  pillars,
  imageSrc,
  imageAlt,
  imageTag,
}: {
  id?: string;
  reverse?: boolean;
  label: string;
  title: ReactNode;
  body: ReactNode;
  pillars: string[];
  imageSrc: string;
  imageAlt: string;
  imageTag: string;
}) {
  return (
    <section
      id={id}
      className="border-b border-rule bg-bone py-24 lg:py-36"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Text */}
          <div
            className={`reveal lg:col-span-5 ${reverse ? "lg:order-2 lg:col-start-8" : ""}`}
          >
            <span className="mb-6 inline-flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-sienna">
              <span className="inline-block h-px w-8 bg-current" />
              {label}
            </span>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-[3.5rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-[1.7] text-muted lg:text-[1.0625rem]">
              {body}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="border border-rule px-3 py-1.5 font-mono text-[0.6875rem] text-muted"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`reveal lg:col-span-6 ${
              reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"
            }`}
          >
            <div
              className="relative aspect-[10/7] w-full overflow-hidden border border-rule will-change-transform"
              data-parallax-img
              style={{
                boxShadow:
                  "0 40px 60px -30px rgba(28,27,23,0.25), 0 20px 40px -20px rgba(184,74,46,0.08)",
              }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 z-[2] bg-bone/90 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-ink">
                {imageTag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
