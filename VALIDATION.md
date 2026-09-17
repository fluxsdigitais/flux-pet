# Validação da conversão

Data da auditoria: 2026-09-16.

## Inventário das exportações

| Exportação do Stitch | Linhas | Rota | Implementação |
| --- | ---: | --- | --- |
| `flux_pet_gest_o_inteligente_para_pet_shops/code.html` | 935 | `/` e `/gestao-inteligente` | `PremiumLanding` |
| `flux_pet_gest_o_inteligente_para_pet_shops_1/code.html` | 935 | `/gestao-inteligente-copia` | `PremiumLanding` |
| `flux_pet_gest_o_acolhedora_e_inteligente/code.html` | 641 | `/acolhedora` | `WarmLanding` |

As duas exportações “gestão inteligente” possuem o mesmo SHA-256
(`d8cbf71a8d8c25b084219d2968123dfcceee4d051db4580f4506af06e6b0f985`).
A exportação acolhedora possui SHA-256
`8c08bf61604448d06dd6754f3f37ada526d383af54e457ffe9e7e5d871440f38`.

## Assets, fontes e dependências

- 3 fotografias JPEG: hero, atendimento e Labrador; cópias locais verificadas
  por SHA-256 contra todas as exportações.
- Plus Jakarta Sans local nos pesos 400, 500, 600, 700 e 800.
- Material Symbols Outlined local.
- Dependências de runtime: Next.js, React e React DOM.
- Dependências de construção/estilo: TypeScript, Tailwind CSS, PostCSS,
  Autoprefixer e ESLint.
- Nenhuma URL temporária do Stitch ou fonte remota é necessária em runtime.

## Conteúdo, links, estados e responsividade

- Seções preservadas: cabeçalho, hero, pilares de vendas/estoque/lucro,
  controle unificado, dashboard, financeiro, estoque, CTA, FAQ e rodapé.
- Links internos apontam para `#recursos`, `#como-funciona`, `#dashboard`,
  `#faq` e `#quero-conhecer`.
- A variante principal mantém menu móvel abre/fecha e fecha ao navegar.
- FAQ principal inicia fechado e permite uma pergunta aberta por vez.
- FAQ acolhedor inicia aberto, como no HTML exportado, e permite alternância
  independente das perguntas.
- Breakpoints `sm`, `md` e `lg`, grades, alturas de imagens, tipografia móvel,
  efeitos hover, pulse, transições e movimento reduzido foram mantidos.

## Verificações executadas

- Leitura integral: 3 arquivos `code.html`, total de 2.511 linhas.
- Integridade da entrada: hashes dos três HTML registrados antes e depois da
  auditoria; nenhum arquivo em `source-stitch` foi modificado.
- `npm run lint`: aprovado, sem erros ou avisos.
- `npm run build`: aprovado; TypeScript e build de produção concluídos, com as
  quatro rotas estáticas geradas.
- `npx playwright test`: suíte preparada, mas a execução nesta máquina ficou
  bloqueada pelo ambiente do navegador (`ETXTBSY`/snapshot V8 no Chromium e
  WebKit ausente). Isso ocorreu antes da navegação e não indica falha do app.

## Divergências conhecidas

- Nenhuma divergência visual intencional foi introduzida.
- A comparação visual automatizada final (screenshots desktop/mobile e pixel
  diff contra `screen.png`) permanece pendente por indisponibilidade dos
  binários Playwright neste ambiente. Portanto, fidelidade pixel a pixel ainda
  precisa de homologação visual em navegador funcional.
- Os links sem destino real no HTML do Stitch foram mantidos como navegação por
  âncora; não foi inventado backend, formulário, autenticação ou integração.

## Próximo passo recomendado

Instalar/reparar os navegadores do Playwright, executar `npm run test:e2e` e
comparar as evidências desktop/mobile com os `screen.png` originais. Depois da
homologação de Jieff, conectar o repositório e o fluxo de deploy somente com
autorização explícita.
