import { PremiumDashboard } from "./PremiumDashboard";
import { PremiumControl, PremiumPillars } from "./PremiumFeatures";
import { PremiumHeader } from "./PremiumHeader";
import { PremiumHero } from "./PremiumHero";
import { PremiumFaq, PremiumFinalCta, PremiumFinance, PremiumFooter, PremiumInventory } from "./PremiumClosing";

export function PremiumLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-base font-sans text-ink-primary antialiased">
      <PremiumHeader />
      <main className="w-full flex-1 overflow-x-hidden">
        <PremiumHero />
        <PremiumPillars />
        <PremiumControl />
        <PremiumDashboard />
        <PremiumFinance />
        <PremiumInventory />
        <PremiumFinalCta />
        <PremiumFaq />
      </main>
      <PremiumFooter />
    </div>
  );
}
