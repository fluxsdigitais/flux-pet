import Image from "next/image";

export function PremiumHero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-12 lg:pb-28 lg:pt-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="z-10 flex flex-col items-start gap-5 lg:col-span-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Gestão inteligente para pet shops</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink-primary sm:text-5xl lg:text-[56px] lg:leading-[1.12]">
            Você sabe <span className="font-normal italic">tudo</span> sobre o seu <span className="inline-block text-brand">pet shop</span>.
          </h1>
          <p className="max-w-xl text-base font-normal leading-relaxed text-ink-secondary sm:text-lg">
            Vendas, estoque, financeiro e resultados em um só lugar. Tenha visão cristalina do seu negócio sem perder a leveza do atendimento diário.
          </p>
          <div className="flex w-full flex-col items-start gap-4 pt-3 sm:w-auto sm:flex-row sm:items-center">
            <a className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand px-8 py-4 text-base font-bold text-white shadow-btn transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0 sm:w-auto" href="#quero-conhecer">
              <span>Quero conhecer o Flux Pet</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-ink-secondary sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span>Simples para usar. Completo para controlar.</span>
          </div>
          <div className="grid w-full max-w-md grid-cols-3 gap-4 border-t border-surface-border pt-6">
            {[["+400", "Lojas ativas"], ["100%", "Em nuvem"], ["Zero", "Planilhas manuais"]].map(([value, label]) => (
              <div key={label}>
                <span className="block text-2xl font-extrabold text-ink-primary lg:text-3xl">{value}</span>
                <span className="text-xs font-medium text-ink-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center lg:col-span-6">
          <div className="pointer-events-none absolute -right-8 -top-10 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-60 w-60 rounded-full bg-positive/10 blur-3xl" />
          <div className="relative w-full overflow-hidden rounded-3xl border border-surface-border bg-surface-card shadow-float-card">
            <Image alt="Golden Retriever amigável e gato em um pet shop boutique acolhedor e ensolarado" className="h-[440px] w-full object-cover sm:h-[500px]" height={382} priority src="/images/pet-shop-hero.jpg" width={512} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-semibold text-white">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <span className="material-symbols-outlined text-[16px] text-brand">storefront</span>
                <span>Paws &amp; Co. Boutique</span>
              </div>
              <span className="rounded-full border border-white/20 bg-white/20 px-3 py-1.5 text-white backdrop-blur-md">Atendimento Ativo</span>
            </div>
          </div>
          <div className="animate-float-slow absolute -right-2 -top-5 w-full max-w-[210px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-float-card backdrop-blur-md sm:-right-6 sm:-top-6">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-secondary">Faturamento hoje</span>
              <span className="inline-flex items-center gap-1 rounded-md bg-positive-soft px-1.5 py-0.5 text-[11px] font-bold text-positive"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-positive" />+18,4%</span>
            </div>
            <div className="text-xl font-extrabold tracking-tight text-ink-primary">R$ 4.280,00</div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-ink-secondary"><span className="material-symbols-outlined text-[15px] text-brand">trending_up</span><span>82 atendimentos</span></div>
          </div>
          <div className="animate-float-alt absolute -bottom-6 -left-2 w-full max-w-[260px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-float-card backdrop-blur-md sm:-left-8">
            <div className="mb-2 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-positive" /><span className="text-xs font-bold text-ink-primary">Estoque saudável</span></div><span className="text-xs font-extrabold text-positive">94%</span></div>
            <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-surface-subtle"><div className="h-full w-[94%] rounded-full bg-positive" /></div>
            <div className="flex items-center justify-between text-[11px] font-medium text-ink-secondary"><span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-positive">check_circle</span>Operação Sincronizada</span><span>1.420 SKUs</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
