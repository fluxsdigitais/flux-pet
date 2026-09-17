import type { Metadata } from "next";
import { PremiumLanding } from "@/components/premium/PremiumLanding";

export const metadata: Metadata = {
  title: "Flux Pet | Export duplicado do Stitch",
};

export default function GestaoInteligenteCopiaPage() {
  return <PremiumLanding />;
}
