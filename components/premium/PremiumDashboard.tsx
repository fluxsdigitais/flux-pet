const metrics = [
  { label: "Faturamento", value: "R$ 32.480", icon: "payments", iconClass: "text-brand", detail: "+14% vs. mês ant.", detailClass: "inline-flex items-center gap-0.5 text-xs font-bold text-positive mt-1", arrow: true, cardClass: "bg-surface-subtle/60 border-surface-border" },
  { label: "Vendas", value: "648", icon: "receipt_long", iconClass: "text-ink-primary", detail: "+22 pedidos", detailClass: "inline-flex items-center gap-0.5 text-xs font-bold text-positive mt-1", arrow: true, cardClass: "bg-surface-subtle/60 border-surface-border" },
  { label: "Ticket Médio", value: "R$ 50,12", icon: "shopping_bag", iconClass: "text-ink-secondary", detail: "Média saudável", detailClass: "text-xs font-medium text-ink-secondary mt-1 block", arrow: false, cardClass: "bg-surface-subtle/60 border-surface-border" },
  { label: "Lucro Líquido Real", value: "R$ 6.840", icon: "account_balance_wallet", iconClass: "text-brand", detail: "Margem 21,1%", detailClass: "inline-flex items-center gap-0.5 text-xs font-bold text-positive mt-1", arrow: true, cardClass: "bg-brand-soft/50 border-brand/20", highlight: true },
];

const weeks = [
  { value: "R$ 6.2k", week: "Sem 1", height: "h-1/2", bar: "bg-[#EAE5DE] hover:bg-ink-muted", valueClass: "text-ink-secondary", weekClass: "text-ink-primary" },
  { value: "R$ 7.8k", week: "Sem 2", height: "h-[64%]", bar: "bg-[#EAE5DE] hover:bg-ink-muted", valueClass: "text-ink-secondary", weekClass: "text-ink-primary" },
  { value: "R$ 8.9k", week: "Sem 3", height: "h-[76%]", bar: "bg-ink-primary hover:opacity-90", valueClass: "text-ink-secondary", weekClass: "text-ink-primary" },
  { value: "R$ 9.5k", week: "Sem 4", height: "h-[90%]", bar: "bg-brand hover:bg-brand-hover shadow-sm", valueClass: "text-brand font-bold", weekClass: "text-brand font-bold" },
];

const margins = [
  { label: "Acessórios & Coleiras", value: "50,0%", width: "w-1/2", color: "bg-brand", text: "text-brand" },
  { label: "Higiene & Banho", value: "42,0%", width: "w-[42%]", color: "bg-ink-primary", text: "text-ink-primary" },
  { label: "Petiscos & Snacks", value: "38,0%", width: "w-[38%]", color: "bg-ink-secondary", text: "text-ink-secondary" },
  { label: "Ração Seca & Úmida", value: "23,3%", width: "w-[23.3%]", color: "bg-surface-border", text: "text-ink-muted" },
];

export function PremiumDashboard() {
  return (
    <section className="w-full border-y border-surface-border/60 bg-surface-subtle/60 py-24" id="dashboard">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 block text-xs font-extrabold uppercase tracking-widest text-brand">Demonstração Interativa</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-primary sm:text-4xl lg:text-4xl">Veja o que está acontecendo na sua loja.</h2>
          <p className="mt-3 text-base text-ink-secondary sm:text-lg">Uma visão clara, sem complicação, para você tomar decisões certas todos os dias.</p>
        </div>
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-surface-border bg-surface-card shadow-float-card md:rounded-3xl">
          <div className="flex items-center justify-between gap-4 border-b border-surface-border bg-surface-subtle px-4 py-3 md:px-6">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#E57373]" /><span className="h-3 w-3 rounded-full bg-[#FFB74D]" /><span className="h-3 w-3 rounded-full bg-[#81C784]" /></div>
            <div className="hidden w-full max-w-xs items-center justify-center gap-2 rounded-md border border-surface-border bg-surface-card px-3 py-1 font-mono text-xs text-ink-secondary sm:flex"><span className="material-symbols-outlined text-[14px] text-ink-muted">lock</span><span>app.fluxpet.com.br/dashboard</span></div>
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-secondary"><span className="h-2 w-2 animate-pulse rounded-full bg-positive" /><span className="hidden md:inline">Atualizado agora</span><span className="rounded border border-surface-border bg-surface-card px-2 py-0.5 text-[11px] text-ink-primary">Outubro</span></div>
          </div>
          <div className="bg-surface-card p-6 md:p-8">
            <div className="flex flex-col items-start justify-between gap-3 border-b border-surface-borderLight pb-6 sm:flex-row sm:items-center">
              <div><h3 className="text-lg font-extrabold text-ink-primary">Painel de Desempenho Mensal</h3><p className="text-xs text-ink-secondary">Modo consolidado · Todas as categorias</p></div>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">Meta mensal: 88% atingida</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div className={`rounded-xl border p-4 ${metric.cardClass}`} key={metric.label}>
                  <div className="mb-1 flex items-center justify-between text-xs text-ink-secondary"><span className={metric.highlight ? "font-bold text-brand" : ""}>{metric.label}</span><span className={`material-symbols-outlined text-[18px] ${metric.iconClass}`}>{metric.icon}</span></div>
                  <div className={`text-xl font-extrabold sm:text-2xl ${metric.highlight ? "text-brand" : "text-ink-primary"}`}>{metric.value}</div>
                  <span className={metric.detailClass}>{metric.arrow ? <span className="material-symbols-outlined text-[14px]">arrow_upward</span> : null}{metric.detail}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 pt-2 lg:grid-cols-12">
              <div className="flex flex-col justify-between rounded-2xl border border-surface-border bg-surface-subtle/50 p-5 lg:col-span-7">
                <div className="mb-4 flex items-center justify-between"><div><h4 className="text-sm font-bold text-ink-primary">Evolução de Vendas & Faturamento</h4><p className="text-xs text-ink-secondary">Últimas 4 semanas consolidadas</p></div><span className="rounded-md border border-surface-border bg-white px-2.5 py-1 text-[11px] font-bold text-brand">Constante alta</span></div>
                <div className="flex h-44 items-end justify-between gap-3 px-3 pb-2 pt-4 sm:gap-6">
                  {weeks.map((item) => (
                    <div className="flex h-full flex-1 flex-col items-center justify-end gap-1.5" key={item.week}><span className={`text-[11px] font-semibold ${item.valueClass}`}>{item.value}</span><div className={`w-full rounded-t-lg transition-colors ${item.height} ${item.bar}`} /><span className={`text-xs font-semibold ${item.weekClass}`}>{item.week}</span></div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 border-t border-surface-borderLight pt-3 text-xs text-ink-secondary"><span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-[#EAE5DE]" />Vendas Regulares</span><span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-brand" /><strong className="font-semibold text-ink-primary">Semana Recorde</strong></span></div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-surface-border bg-surface-subtle/50 p-5 lg:col-span-5">
                <div><div className="mb-1 flex items-center justify-between"><h4 className="text-sm font-bold text-ink-primary">Onde está seu dinheiro?</h4><span className="material-symbols-outlined text-[18px] text-ink-muted">pie_chart</span></div><p className="mb-4 text-xs text-ink-secondary">Margem de contribuição por departamento</p>
                  <div className="space-y-3.5">{margins.map((item) => (<div key={item.label}><div className="mb-1 flex justify-between text-xs"><span className="font-medium text-ink-primary">{item.label}</span><span className={`font-bold ${item.text}`}>{item.value}</span></div><div className="h-2.5 w-full overflow-hidden rounded-full border border-surface-borderLight bg-surface-card"><div className={`h-full rounded-full ${item.width} ${item.color}`} /></div></div>))}</div>
                </div>
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-surface-border bg-white p-3 text-xs text-ink-primary"><span className="material-symbols-outlined shrink-0 text-[18px] text-brand">lightbulb</span><span>Dica Flux: Combos de ração com petiscos aumentam a margem média em até 8,4%.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
