import Link from "next/link";
import { APP_URL, FIRM_URL } from "@/lib/urls";

export function LandingFooter() {
  return (
    <footer className="bg-bone py-16 pb-10">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3 text-lg">
              <span className="inline-grid h-7 w-7 place-items-center border border-ink text-base italic font-display">
                C
              </span>
              <span className="font-medium tracking-tight">
                Compliance
                <em className="not-italic italic font-display font-normal text-sienna">
                  IQ
                </em>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted">
              A grounded AI research copilot for regulated firms in Canada. A
              product of JKOUAM Consultancy Inc.
            </p>
          </div>

          <FooterCol
            label="Product"
            links={[
              { href: "#problem", text: "Problem" },
              { href: "#how", text: "How it works" },
              { href: "#security", text: "Security" },
              { href: "#demo", text: "Book a demo" },
            ]}
          />
          <FooterCol
            label="Company"
            links={[
              { href: FIRM_URL, text: "JKOUAM Consultancy" },
              { href: `${FIRM_URL}/about`, text: "About the firm" },
              { href: `${FIRM_URL}/contact`, text: "Contact" },
            ]}
          />
          <FooterCol
            label="Access"
            links={[
              { href: `${APP_URL}/onboarding`, text: "Start onboarding" },
              { href: `${APP_URL}/login`, text: "Sign in" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} JKOUAM Consultancy Inc. All rights reserved.</span>
          <span>
            A product of{" "}
            <a href={FIRM_URL} className="text-sienna hover:underline">
              kouamvision.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  links,
}: {
  label: string;
  links: { href: string; text: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.text}>
            <a href={l.href} className="text-sm text-muted transition-colors hover:text-sienna">
              {l.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
