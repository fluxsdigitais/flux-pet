# Flux Pet

Conversão do projeto **Flux Pet Landing Page** (Google Stitch, ID
`7808829562387346976`) para Next.js, TypeScript e App Router.

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

Validações de código e produção:

```bash
npm run lint
npm run build
npm run start
```

Os testes de navegador são opcionais e exigem os binários do Playwright:

```bash
npx playwright install
npm run test:e2e
```

## Rotas

- `/`: tela principal, baseada em `flux_pet_gest_o_inteligente_para_pet_shops`.
- `/gestao-inteligente`: rota identificável da mesma exportação principal.
- `/gestao-inteligente-copia`: segunda exportação do Stitch; o HTML é idêntico,
  byte a byte, ao da rota anterior e reutiliza os mesmos componentes.
- `/acolhedora`: variante baseada em
  `flux_pet_gest_o_acolhedora_e_inteligente`.

## Componentes

As duas famílias visuais foram mantidas separadas para preservar seus tokens e
DOM sem duplicar páginas inteiras:

- `components/common/BrandLogo.tsx`: marca compartilhada.
- `components/premium/*`: cabeçalho/menu móvel, hero, pilares, controle,
  dashboard, financeiro, estoque, CTA final, FAQ e rodapé da tela principal.
- `components/warm/*`: cabeçalho, hero, pilares, controle, dashboard,
  financeiro, estoque, CTA/FAQ e rodapé da variante acolhedora.

## Decisões de fidelidade

- Tailwind CSS 3 mantém classes, breakpoints, cores, tipografia, sombras,
  espaçamentos e transições das exportações.
- Plus Jakarta Sans e Material Symbols foram armazenadas em `public/fonts`.
- As três fotografias originais foram copiadas sem alteração para
  `public/images`; seus hashes SHA-256 coincidem com os assets do Stitch.
- O menu móvel e os acordeões foram convertidos para estado React, mantendo os
  estados iniciais próprios de cada exportação.
- `next/image` usa os mesmos arquivos, dimensões visuais e `object-fit` dos
  elementos originais.
- `source-stitch` é entrada imutável e não faz parte da aplicação em runtime.

Consulte `VALIDATION.md` para o inventário e o resultado das verificações.
