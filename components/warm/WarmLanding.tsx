import { WarmDashboard } from "./WarmDashboard";
import { WarmControl, WarmPillars } from "./WarmFeatures";
import { WarmFooter, WarmFinalAndFaq, WarmFinance, WarmInventory } from "./WarmClosing";
import { WarmHeader, WarmHero } from "./WarmHeaderHero";

export function WarmLanding() {
  return (
    <div className="warm-page flex min-h-screen flex-col justify-between bg-surface font-body-md text-on-surface antialiased">
      <WarmHeader />
      <main className="w-full flex-1 bg-surface pt-20">
        <div className="flex w-full flex-col">
          <WarmHero />
          <WarmPillars />
          <WarmControl />
          <WarmDashboard />
          <WarmFinance />
          <WarmInventory />
          <WarmFinalAndFaq />
        </div>
      </main>
      <WarmFooter />
    </div>
  );
}
