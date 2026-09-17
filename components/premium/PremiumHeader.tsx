"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/common/BrandLogo";

const navigation = [
  ["Recursos", "#recursos"],
  ["Como funciona", "#como-funciona"],
  ["Demonstração", "#dashboard"],
  ["FAQ", "#faq"],
] as const;

export function PremiumHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border/70 bg-[#FAF9F6]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a className="group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand" href="#">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-9 text-sm font-semibold text-ink-secondary md:flex">
          {navigation.map(([label, href]) => (
            <a className="py-1 transition-colors hover:text-ink-primary" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-btn transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0" href="#quero-conhecer">
            <span>Quero conhecer</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="rounded-lg p-2 text-ink-primary transition-colors hover:bg-surface-subtle md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="space-y-3 border-b border-surface-border bg-surface-base px-6 py-4 md:hidden">
          {navigation.map(([label, href]) => (
            <a className="block py-2 text-sm font-semibold text-ink-secondary hover:text-brand" href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <div className="pt-2">
            <a className="block w-full rounded-xl bg-brand py-3 text-center text-sm font-bold text-white shadow-btn" href="#quero-conhecer" onClick={() => setOpen(false)}>
              Quero conhecer o Flux Pet
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
