import { ImageSplit } from "./ImageSplit";

export function SecuritySplit() {
  return (
    <ImageSplit
      id="security"
      label="— 03 / Security"
      title={
        <>
          A vault, not a{" "}
          <em className="italic font-normal text-sienna">chatbot.</em>
        </>
      }
      body={
        <>
          Your firm&apos;s documents are encrypted at rest, encrypted in
          transit, and never used to train shared models. Access is
          authenticated through AWS Cognito with multi-factor authentication.
          Every query touches only your tenant&apos;s data.
        </>
      }
      pillars={[
        "AES-256 at rest",
        "TLS 1.3 in transit",
        "MFA enforced",
        "No training on your data",
      ]}
      imageClass="split-img-security"
      imageTag="Security"
      imageNote="/public/security.jpg"
    />
  );
}

export function IsolationSplit() {
  return (
    <ImageSplit
      reverse
      label="— 04 / Tenant isolation"
      title={
        <>
          Your firm&apos;s data.
          <br />
          <em className="italic font-normal text-sienna">Your firm alone.</em>
        </>
      }
      body={
        <>
          Tenant isolation is enforced at the database layer — not by
          instructions to a model. Your documents, queries, and answers are
          segregated at the row level. A mistake in prompt engineering cannot
          leak data across tenants. It is architecturally impossible.
        </>
      }
      pillars={[
        "Row-level security",
        "Tenant-scoped embeddings",
        "Separate S3 prefixes",
        "Audit-per-tenant",
      ]}
      imageClass="split-img-isolation"
      imageTag="Isolation"
      imageNote="/public/tenant-isolation.jpg"
    />
  );
}

export function ResidencySplit() {
  return (
    <ImageSplit
      label="— 05 / Data residency"
      title={
        <>
          Hosted in Canada.
          <br />
          <em className="italic font-normal text-sienna">Stays in Canada.</em>
        </>
      }
      body={
        <>
          Deployed in AWS ca-central-1 (Montréal). Documents, queries,
          embeddings, and logs never leave Canadian infrastructure unless you
          explicitly enable an external model. Bilingual source coverage —
          English and French — built in from day one.
        </>
      }
      pillars={[
        "ca-central-1 default",
        "EN + FR corpus",
        "PIPEDA-aligned",
        "SOC 2 track",
      ]}
      imageClass="split-img-residency"
      imageTag="Residency"
      imageNote="/public/canadian-residency.jpg"
    />
  );
}
