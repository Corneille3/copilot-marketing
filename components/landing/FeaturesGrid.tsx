import { SectionShell, SectionHead } from "./shared";

const FEATURES = [
  { roman: "i.", title: "Cited answers, every time", body: "Every response links to the source document and the section it came from." },
  { roman: "ii.", title: "Authority-aware retrieval", body: "Regulatory sources rank above internal memos automatically." },
  { roman: "iii.", title: "Tenant-isolated by design", body: "Your documents are never pooled with another firm's. Enforced at the database layer." },
  { roman: "iv.", title: "Hybrid retrieval", body: "BM25 + vector with reciprocal rank fusion and cross-encoder reranking." },
  { roman: "v.", title: "Full audit trail", body: "Every question, retrieval, and answer logged with source attribution." },
  { roman: "vi.", title: "Canadian-hosted", body: "AWS ca-central-1. Data never leaves Canada unless you explicitly enable it." },
];

export function FeaturesGrid() {
  return (
    <SectionShell>
      <SectionHead
        eyebrow="— 06 / Features"
        title={
          <>
            Six things that{" "}
            <em className="italic font-normal text-sienna">matter</em>
            <br />
            in compliance.
          </>
        }
      />
      <div className="reveal-stagger grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex min-h-[260px] flex-col gap-4 bg-bone p-8 lg:p-10"
          >
            <span className="font-display text-lg italic text-sienna">{f.roman}</span>
            <h3 className="font-display text-2xl font-light leading-[1.2]">{f.title}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
