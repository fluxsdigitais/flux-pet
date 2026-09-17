import Image from "next/image";

const pillars = [
  {
    number: "01",
    icon: "point_of_sale",
    iconClass: "bg-brand-soft text-brand",
    title: "Vendas",
    lead: "Saiba quanto vende.",
    text: "Monitore cada checkout no balcão, ticket médio por cliente, pagamentos em cartão, Pix e crediário em tempo real sem fechar o caixa no escuro.",
    footer: "Checkout ágil & emissão fiscal",
  },
  {
    number: "02",
    icon: "inventory_2",
    iconClass: "bg-surface-subtle text-ink-primary",
    title: "Estoque",
    lead: "Saiba o que tem.",
    text: "Rastreie sacarias de ração, farmácia veterinária fracionada, lotes, data de validade e receba alertas de compras antes das prateleiras ficarem vazias.",
    footer: "Sugestão de reposição inteligente",
  },
  {
    number: "03",
    icon: "savings",
    iconClass: "bg-positive-soft text-positive",
    title: "Lucro",
    lead: "Saiba quanto ganha.",
    text: "Cálculo automatizado de Custo de Mercadoria Vendida (CMV) e despesas fixas para enxergar exatamente a sobra real líquida no final de cada dia.",
    footer: "Margens reais por departamento",
  },
];

export function PremiumPillars() {
  return (
    <section className="w-full border-y border-surface-border/60 bg-surface-subtle/50 py-24" id="recursos">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-xs font-extrabold uppercase tracking-widest text-brand">Visão Estratégica Sem Ruído</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-primary sm:text-4xl lg:text-4xl">
            Seu pet shop tem muitos números. O <span className="font-extrabold text-brand">Flux Pet</span> transforma tudo em clareza.
          </h2>
          <p className="mt-4 text-base font-normal text-ink-secondary sm:text-lg">Elimine o estresse do fim do mês com três pilares consolidados em uma experiência fluida, sem jargões contábeis.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {pillars.map((pillar) => (
            <article className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-surface-card p-8 shadow-subtle-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float-card" key={pillar.number}>
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-mono text-4xl font-extrabold text-surface-border transition-colors group-hover:text-brand/30">{pillar.number}</span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${pillar.iconClass}`}><span className="material-symbols-outlined text-[24px]">{pillar.icon}</span></div>
                </div>
                <h3 className="mb-1 text-xl font-bold text-ink-primary">{pillar.title}</h3>
                <p className="mb-3 text-sm font-semibold text-brand">{pillar.lead}</p>
                <p className="text-sm leading-relaxed text-ink-secondary">{pillar.text}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-surface-borderLight pt-4 text-xs font-bold text-ink-secondary transition-colors group-hover:text-brand">
                <span>{pillar.footer}</span><span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilityLabels = ["Vendas diárias", "Estoque & Validade", "Financeiro real", "Indicadores & Metas"];

export function PremiumControl() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12" id="como-funciona">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <div className="relative w-full overflow-hidden rounded-3xl border border-surface-border bg-surface-card shadow-float-card">
            <Image alt="Proprietária atendendo com carinho e sorriso no balcão de um pet shop boutique" className="h-[460px] w-full object-cover sm:h-[520px]" height={382} loading="eager" src="/images/pet-shop-atendimento.jpg" width={512} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-brand" /><span className="text-xs font-bold text-ink-primary">Atendimento humanizado</span></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md"><span className="material-symbols-outlined text-[18px] text-brand">bolt</span><div><p className="text-xs font-bold leading-tight text-ink-primary">Frente de caixa ágil</p><p className="text-[10px] text-ink-secondary">Venda rápida em 3 cliques</p></div></div>
            <div className="absolute bottom-6 right-6 hidden items-center gap-1.5 rounded-xl border border-white/10 bg-ink-primary/90 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md sm:flex"><span className="material-symbols-outlined text-[16px] text-positive">sync</span><span>Visão unificada</span></div>
          </div>
        </div>
        <div className="order-1 flex flex-col items-start gap-5 lg:order-2 lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-subtle px-3.5 py-1 text-ink-secondary"><span className="material-symbols-outlined text-[16px] text-brand">verified_user</span><span className="text-xs font-bold uppercase tracking-wider text-ink-primary">Gestão Unificada</span></div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-primary sm:text-4xl lg:text-5xl">Tudo sob controle.</h2>
          <p className="text-base font-normal leading-relaxed text-ink-secondary sm:text-lg">Do atendimento afetuoso com o tutor até o fechamento do mês contábil, você acompanha a operação em um único painel. Menos tempo alimentando cadastros manuais confusos, mais tempo dando atenção para quem realmente importa.</p>
          <div className="grid w-full max-w-lg grid-cols-2 gap-3.5 pt-2">
            {capabilityLabels.map((label) => (
              <div className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-card p-3.5 shadow-sm" key={label}><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"><span className="material-symbols-outlined text-[14px]">check</span></span><span className="text-sm font-bold text-ink-primary">{label}</span></div>
            ))}
          </div>
          <div className="pt-4"><a className="group inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-hover" href="#dashboard"><span>Descobrir como funciona na prática</span><span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1.5">arrow_forward</span></a></div>
        </div>
      </div>
    </section>
  );
}
