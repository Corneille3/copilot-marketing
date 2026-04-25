import { SectionShell, SectionHead } from "./shared";

export function ProblemSection() {
  return (
    <SectionShell id="problem">
      <SectionHead
        eyebrow="— 01 / The problem"
        title={
          <>
            Generic AI was{" "}
            <em className="italic font-normal text-sienna">not built</em>
            <br />
            for regulated work.
          </>
        }
      />

      <div className="reveal grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Bad — generic chatbot */}
        <div className="flex min-h-[320px] flex-col border border-rule bg-bone p-10">
          <div className="mb-6 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
            — Generic chatbot
          </div>
          <div className="mb-6 border-b border-dashed border-rule pb-6 font-display text-xl italic text-ink">
            What&apos;s the GST/HST threshold for consulting in Ontario?
          </div>
          <p className="flex-1 text-[0.9375rem] leading-relaxed text-muted">
            The GST/HST small supplier threshold is generally{" "}
            <strong className="font-medium text-ink">$30,000</strong> in total
            taxable revenues. However, I couldn&apos;t find the specific source
            for this, and thresholds may have been updated. You may want to
            check the Canada Revenue Agency&apos;s website for the most current
            information.
          </p>
          <div className="mt-6 border-t border-rule pt-4 font-mono text-xs">
            <span className="text-[#c74a3e]">✕</span>
            <span className="ml-2 text-muted">
              No citation · no source · &quot;you may want to check&quot;
            </span>
          </div>
        </div>

        {/* Good — ComplianceIQ */}
        <div className="flex min-h-[320px] flex-col border border-ink bg-ink p-10 text-bone">
          <div className="mb-6 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-sienna">
            — ComplianceIQ
          </div>
          <div className="mb-6 border-b border-dashed border-bone/20 pb-6 font-display text-xl italic text-bone">
            What&apos;s the GST/HST threshold for consulting in Ontario?
          </div>
          <p className="flex-1 text-[0.9375rem] leading-relaxed text-bone/90">
            A person is a small supplier if their total taxable revenues are{" "}
            <strong className="font-medium text-bone">$30,000 or less</strong>{" "}
            over four consecutive calendar quarters{" "}
            <Cite>S1</Cite>. Consulting services are taxable supplies{" "}
            <Cite>S2</Cite>.
          </p>
          <div className="mt-6 border-t border-bone/20 pt-4 font-mono text-xs">
            <span className="text-sienna">✓</span>
            <span className="ml-2 text-bone/70">
              RC4022 · Excise Tax Act s.148 · audit-logged
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Cite({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-0.5 inline-block border border-sienna/30 bg-sienna/10 px-1.5 py-0.5 align-middle font-mono text-[0.6875rem] text-sienna">
      {children}
    </span>
  );
}
