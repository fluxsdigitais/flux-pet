"use client";

import Image from "next/image";
import { useState } from "react";
import { BrandLogo } from "@/components/common/BrandLogo";

const inventoryCards = [
  { icon: "warehouse", iconClass: "bg-surface-subtle text-ink-primary", badge: "Equilibrado", badgeClass: "text-positive bg-positive-soft", label: "Estoque Atual", value: "R$ 54.200", valueClass: "text-ink-primary", detail: "1.420 SKUs catalogados e valorizados em tempo real." },
  { icon: "warning", iconClass: "bg-red-50 text-[#D32F2F]", badge: "3 Alertas", badgeClass: "text-[#D32F2F] bg-red-50", label: "Estoque Crítico", value: "12 itens", valueClass: "text-[#D32F2F]", detail: "Menos de 3 dias de cobertura. Alertas automáticos para compra." },
  { icon: "hourglass_empty", iconClass: "bg-brand-soft text-brand", badge: "Ação sugerida", badgeClass: "text-brand bg-brand-soft", label: "Produtos Parados", value: "R$ 3.890", valueClass: "text-brand", detail: "Capital ocioso há mais de 45 dias. Sugestão de combo promocional." },
];

const inventoryItems = [
  { icon: "pets", name: "Ração Premium Porte Médio 15kg", detail: "8 un em estoque · Giro Alto", state: "Normal", stateClass: "text-positive bg-positive-soft" },
  { icon: "medication", name: "Antipulgas & Carrapatos 10-20kg", detail: "2 un restantes · Giro Médio", state: "Crítico", stateClass: "text-[#D32F2F] bg-red-50" },
  { icon: "local_mall", name: "Areia Higiênica Biodegradável 4kg", detail: "44 un em estoque · Giro Alto", state: "Saudável", stateClass: "text-positive bg-positive-soft" },
];

const faqs = [
  ["O que é o Flux Pet?", "Um sistema de gestão completo e simples feito sob medida para pet shops controlarem vendas, estoque e finanças em uma tela organizada e sem jargões contábeis complexos."],
  ["O Flux Pet controla estoque?", "Sim. Acompanhe entradas, saídas, níveis críticos e saiba exatamente quais itens estão parados há mais tempo para planejar compras assertivas e evitar desperdício."],
  ["Consigo acompanhar meu lucro?", "Sim. O sistema calcula automaticamente CMV, custos e margem para mostrar seu lucro líquido real por dia, semana e mês, permitindo saber quanto dinheiro realmente sobra."],
  ["Posso emitir nota fiscal?", "Sim, através de integração direta e simplificada com emissores homologados para NFC-e e NF-e com envio de comprovante direto por WhatsApp para os tutores."],
] as const;

export function PremiumFinance() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
      <div className="rounded-3xl border border-surface-border bg-surface-card p-8 shadow-subtle-card lg:p-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col items-start gap-4 lg:col-span-7"><span className="text-xs font-extrabold uppercase tracking-widest text-brand">Controle Financeiro Real</span><h2 className="text-3xl font-extrabold leading-snug tracking-tight text-ink-primary sm:text-4xl lg:text-4xl">Faturar é importante. Saber quanto sobra é essencial.</h2><p className="text-base font-normal leading-relaxed text-ink-secondary sm:text-lg">Muitos donos de pet shop comemoram o volume que entra no cartão, mas são surpreendidos pelas faturas de fornecedores e impostos no dia 10. O Flux Pet desconta CMV e despesas operacionais em cada venda, permitindo previsibilidade total.</p><div className="pt-2"><a className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-btn transition-all hover:bg-brand-hover" href="#quero-conhecer"><span>Quero dominar meu financeiro</span><span className="material-symbols-outlined text-[16px]">chevron_right</span></a></div></div>
          <div className="rounded-2xl border border-surface-border bg-surface-subtle/80 p-6 shadow-sm sm:p-7 lg:col-span-5"><div className="flex items-center justify-between border-b border-surface-border pb-4"><span className="text-xs font-bold uppercase tracking-wider text-ink-primary">Demonstrativo Sintético</span><span className="material-symbols-outlined text-[20px] text-brand">analytics</span></div><div className="space-y-3.5 py-4 text-sm"><div className="flex items-center justify-between"><span className="text-ink-secondary">(+) Faturamento Bruto</span><span className="font-extrabold text-ink-primary">R$ 32.480,00</span></div><div className="flex items-center justify-between text-[#C62828]"><span>(-) CMV & Fornecedores</span><span className="font-semibold">- R$ 19.820,00</span></div><div className="flex items-center justify-between text-[#C62828]"><span>(-) Custos Fixos & Operação</span><span className="font-semibold">- R$ 5.820,00</span></div></div><div className="flex items-center justify-between rounded-xl border border-positive/20 bg-positive-soft p-4"><div><span className="block text-xs font-bold uppercase tracking-wider text-positive-text">(=) Sobra Real no Bolso</span><span className="text-2xl font-extrabold text-positive">R$ 6.840,00</span></div><span className="rounded-md border border-positive/30 bg-white px-2.5 py-1 text-xs font-bold text-positive shadow-sm">21,1% Líquido</span></div></div>
        </div>
      </div>
    </section>
  );
}

export function PremiumInventory() {
  return (
    <section className="w-full border-t border-surface-border/60 bg-surface-subtle/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12"><div className="mb-14 max-w-2xl"><span className="mb-3 block text-xs font-extrabold uppercase tracking-widest text-brand">Controle Sem Desperdício</span><h2 className="text-3xl font-extrabold tracking-tight text-ink-primary sm:text-4xl">Estoque parado também é dinheiro.</h2><p className="mt-3 text-base text-ink-secondary sm:text-lg">Saiba o que vende, o que está parado e o que precisa ser reposto imediatamente.</p></div>
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">{inventoryCards.map((card) => (<article className="rounded-2xl border border-surface-border bg-surface-card p-6 shadow-subtle-card" key={card.label}><div className="mb-4 flex items-center justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconClass}`}><span className="material-symbols-outlined text-[20px]">{card.icon}</span></span><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${card.badgeClass}`}>{card.badge}</span></div><span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-secondary">{card.label}</span><div className={`text-3xl font-extrabold tracking-tight ${card.valueClass}`}>{card.value}</div><p className="mt-2 text-xs text-ink-secondary">{card.detail}</p></article>))}</div>
        <div className="rounded-2xl border border-surface-border bg-surface-card p-6 shadow-subtle-card"><div className="mb-4 flex items-center gap-2 border-b border-surface-border pb-4 text-sm font-bold text-ink-primary"><span className="material-symbols-outlined text-[20px] text-brand">checklist</span><span>Monitoramento em Tempo Real de Linhas Críticas</span></div><div className="grid grid-cols-1 gap-4 md:grid-cols-3">{inventoryItems.map((item) => (<div className="flex items-center justify-between rounded-xl border border-surface-border bg-surface-subtle/60 p-4" key={item.name}><div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-surface-card text-brand"><span className="material-symbols-outlined text-[18px]">{item.icon}</span></div><div><p className="text-xs font-bold text-ink-primary">{item.name}</p><p className="text-[11px] text-ink-secondary">{item.detail}</p></div></div><span className={`rounded-md px-2 py-1 text-[11px] font-bold ${item.stateClass}`}>{item.state}</span></div>))}</div></div>
      </div>
    </section>
  );
}

export function PremiumFinalCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12" id="quero-conhecer"><div className="relative w-full overflow-hidden rounded-3xl border border-surface-border bg-surface-card shadow-float-card"><div className="grid grid-cols-1 items-center lg:grid-cols-12"><div className="relative h-72 overflow-hidden sm:h-96 lg:col-span-6 lg:h-full"><Image alt="Labrador amigável descansando tranquilo no aconchego de uma loja de produtos pet" className="h-full w-full object-cover" height={286} loading="eager" src="/images/pet-shop-labrador.jpg" width={512} /><div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r" /></div><div className="flex flex-col items-start gap-5 p-8 sm:p-12 lg:col-span-6 lg:p-14"><div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand"><span className="material-symbols-outlined text-[15px]">favorite</span><span>Cuidado e Controle</span></div><h2 className="text-3xl font-extrabold leading-snug tracking-tight text-ink-primary sm:text-4xl">Cuide do seu negócio como você cuida dos seus clientes.</h2><p className="text-base font-normal leading-relaxed text-ink-secondary sm:text-lg">Tenha uma visão completa do seu pet shop e tome decisões com mais segurança. O Flux Pet foi desenhado especialmente para quem ama animais e busca prosperidade sustentável.</p><div className="w-full pt-2 sm:w-auto"><a className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand px-8 py-4 text-base font-bold text-white shadow-btn transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0 sm:w-auto" href="#quero-conhecer"><span>Quero conhecer o Flux Pet</span><span className="material-symbols-outlined text-[20px]">arrow_forward</span></a></div><p className="text-xs text-ink-secondary">Demonstração guiada gratuita · Sem necessidade de cartão de crédito.</p></div></div></div></section>
  );
}

export function PremiumFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20" id="faq"><div className="mb-12 text-center"><span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-brand">Tire Suas Dúvidas</span><h3 className="text-3xl font-extrabold text-ink-primary">Perguntas Frequentes</h3><p className="mt-2 text-sm text-ink-secondary">Tudo o que você precisa saber antes de dar o próximo passo.</p></div><div className="space-y-3">{faqs.map(([question, answer], index) => { const isOpen = openIndex === index; return (<div className="rounded-2xl border border-surface-border bg-surface-card p-5 shadow-subtle-card transition-colors hover:border-brand/40" key={question}><button aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 text-left text-base font-bold text-ink-primary focus:outline-none" onClick={() => setOpenIndex(isOpen ? null : index)} type="button"><span>{question}</span><span className={`material-symbols-outlined transform text-ink-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>expand_more</span></button><div className={`overflow-hidden text-sm leading-relaxed text-ink-secondary transition-[max-height,opacity,margin] duration-300 ${isOpen ? "mt-3 max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>{answer}</div></div>); })}</div></section>
  );
}

export function PremiumFooter() {
  return (
    <footer className="w-full border-t border-surface-border bg-[#FAF9F6]"><div className="mx-auto max-w-7xl px-6 py-12 lg:px-12"><div className="flex flex-col items-center justify-between gap-6 border-b border-surface-border pb-8 md:flex-row"><div className="flex items-center gap-3"><BrandLogo compact /><span className="mx-2 text-surface-border">|</span><span className="text-xs text-ink-secondary">Gestão inteligente para pet shops</span></div><nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-ink-secondary"><a className="transition-colors hover:text-ink-primary" href="#recursos">Recursos</a><a className="transition-colors hover:text-ink-primary" href="#como-funciona">Como funciona</a><a className="transition-colors hover:text-ink-primary" href="#dashboard">Demonstração</a><a className="transition-colors hover:text-ink-primary" href="#faq">FAQ</a><a className="transition-colors hover:text-brand" href="#quero-conhecer">Contato</a></nav></div><div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-ink-secondary sm:flex-row"><p>© 2026 Flux Soluções Digitais Ltda. Todos os direitos reservados.</p><p className="font-medium text-ink-muted">Tecnologia Veterinária & Concierge</p></div></div></footer>
  );
}
