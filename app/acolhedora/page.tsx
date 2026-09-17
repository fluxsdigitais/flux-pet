import type { Metadata } from "next";
import { WarmLanding } from "@/components/warm/WarmLanding";

export const metadata: Metadata = {
  title: "Flux Pet | Gestão Acolhedora e Inteligente",
};

export default function AcolhedoraPage() {
  return <WarmLanding />;
}
