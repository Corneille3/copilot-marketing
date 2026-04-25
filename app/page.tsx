import { LandingNav } from "@/components/landing/LandingNav";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import {
  SecuritySplit,
  IsolationSplit,
  ResidencySplit,
} from "@/components/landing/Splits";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { RevealObserver } from "@/components/landing/RevealObserver";
import { ParallaxObserver } from "@/components/landing/ParallaxObserver";

export default function LandingPage() {
  return (
    <>
      <RevealObserver />
      <ParallaxObserver />
      <LandingNav />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <SecuritySplit />
        <IsolationSplit />
        <ResidencySplit />
        <FeaturesGrid />
        <StatsSection />
        <CTASection />
      </main>
      <LandingFooter />
    </>
  );
}
