import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Pet | Gestão Inteligente para Pet Shops",
  description:
    "Vendas, estoque, financeiro e resultados do seu pet shop em um só lugar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
