import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://korneva.kouamvision.com";

export const metadata: Metadata = {
  title: "Korneva — Grounded AI research for regulated firms",
  description:
    "A multi-tenant AI compliance research copilot for accounting, legal, and regulated firms in Canada. Cited answers from authoritative sources and your firm's own documents. Canadian-hosted, tenant-isolated.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Korneva — Grounded AI research for regulated firms",
    description:
      "A multi-tenant AI compliance research copilot for accounting, legal, and regulated firms in Canada.",
    url: SITE_URL,
    siteName: "Korneva",
    locale: "en_CA",
    type: "website",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Korneva",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Multi-tenant AI compliance research copilot for accounting, legal, and regulated firms in Canada.",
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: "JKOUAM Consultancy Inc.",
    url: "https://kouamvision.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
