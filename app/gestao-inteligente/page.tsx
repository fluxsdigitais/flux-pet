import type { Metadata } from "next";
import { PremiumLanding } from "@/components/premium/PremiumLanding";

export const metadata: Metadata = {
  title: "Flux Pet | Gestão Inteligente para Pet Shops",
};

export default function GestaoInteligentePage() {
  return <PremiumLanding />;
}
