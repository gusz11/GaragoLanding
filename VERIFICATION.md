# Verificação da landing page

## Escopo e localização

Projeto independente em `C:\Users\gusta\Documents\ChatGPT\Garago-Landing`, separado do repositório Expo. A cópia interna e os arquivos temporários de captura foram removidos. Nenhuma integração ou funcionalidade do app foi modificada. O ajuste temporário do ESLint na raiz do Garago foi desfeito; a alteração pré-existente em `ProfileScreen.tsx` foi preservada.

## Referências e conteúdo

- Skill `frontend-design` instalada no projeto, lida integralmente.
- Tokens, logotipo, fonte e componentes reais do aplicativo inspecionados.
- Visão geral do Figma consultada; `get_design_context` não retornou contexto por ausência de seleção. A captura geral e o código atual do produto orientaram a identidade, sem apresentar a landing como reprodução de um frame pronto.
- Cinco capturas produzidas com os componentes reais do Expo: Inventário, Catálogo, vaga, armário e Reservas. O ambiente de captura usou sessão sintética em memória e bloqueou chamadas HTTP às APIs.
- Todas as telas capturadas têm dados fictícios, identificados no conteúdo da página. As imagens são estáticas e não indicam prazos atuais.
- As dez áreas do briefing estão presentes: navegação, hero, problema/solução, etapas, funcionalidades, galeria, benefícios, CTA final, FAQ e rodapé.

## Verificações realizadas antes da mudança de pasta

- TypeScript, lint e build de produção da landing aprovados.
- TypeScript e lint do aplicativo Expo aprovados.
- Suíte existente do Expo: 34 arquivos, 316 testes aprovados.
- Larguras 320, 375, 390, 768, 1024, 1440 e 1920: largura do documento verificada sem overflow horizontal.
- Menu mobile: abertura, fechamento, Escape, retorno de foco e ciclo de Tab/Shift+Tab verificados, inclusive em 320 px.
- Galeria: as cinco seleções atualizam estado e descrição corretamente.
- FAQ: expansão por Enter e estado nativo aberto/fechado verificados.
- Âncoras internas: todos os destinos existem; CTAs e navegação verificados.
- Um único h1, imagens com textos alternativos e capturas locais presentes.
- Console da revisão desktop sem erros ou avisos.
- Contraste calculado: branco nos três pontos do gradiente primário entre 5,09:1 e 5,38:1; texto secundário entre 8,05:1 e 9,44:1 nas superfícies usadas.

## Dependências

`npm audit --omit=dev`: nenhuma vulnerabilidade encontrada, confirmado novamente após a mudança.

A auditoria completa apontou cinco entradas de severidade alta na cadeia de desenvolvimento `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`, referentes ao aviso GHSA-vfj7-8cjw-p6xm. Isso não faz parte do JavaScript de produção. A versão publicada de `braces` consultada foi 3.0.3; não foi aplicado `audit fix --force` nem downgrade incompatível do Next.js. O ESLint 9.39.5 foi mantido por compatibilidade com os plugins atuais, embora o npm informe que essa linha deixou de ser suportada. A atualização compatível das ferramentas de lint permanece uma pendência de manutenção.

## Limites e publicação

A revisão em navegador não substitui testes em dispositivos físicos, Safari/iOS ou auditoria assistiva completa. O movimento reduzido foi implementado via CSS e `useReducedMotion`; não foi alterada a configuração do sistema para simular essa preferência.

Antes de publicar, definir `SITE_URL` com o domínio HTTPS real. Não há links oficiais das lojas, domínio comercial presumido, formulário de inscrição ou backend nesta página. Nenhum commit, push ou deploy foi realizado.

As evidências visuais ficam em `verification/`.

## Validação após a separação — 23/10/2026

- `npm run lint`: aprovado sem erros ou avisos.
- `npm run build`: aprovado; página principal, página 404 e imagem Open Graph pré-renderizadas.
- `npm run typecheck`: aprovado.
- `npm audit --omit=dev`: zero vulnerabilidades.
- Aplicação iniciada com `npm start` diretamente na pasta independente, sem backend ou Expo.
- HTTP 200 na página inicial e na imagem social; idioma pt-BR, description e metadados Open Graph confirmados. Imagem social inspecionada visualmente.
- Sete larguras repetidas na compilação de produção: sem overflow e sem imagens quebradas entre as carregadas (`verification/widths-final.json`).
- Menu mobile fecha ao selecionar a âncora e chega a `#aplicativo`.
- Seleção de detalhes de armário atualiza descrição, estado selecionado e captura exibida.
- FAQ de download expande por Enter; console sem erros ou avisos na revisão final.
- Evidências: `verification/desktop-final.png`, `verification/mobile-gallery-final.png` e `verification/social-preview.png`.
- Confirmado que `Garago/landing` e `Garago/artifacts/landing` não existem mais. O Git do app contém somente a modificação pré-existente em `ProfileScreen.tsx`.

A aplicação foi compilada novamente na localização final; caches do caminho anterior foram removidos antes da compilação. Nenhum arquivo externo ao projeto é necessário para executar a landing.

## Capturas fornecidas em public/images

As sete imagens JPEG fornecidas foram identificadas por comparação SHA-256 com os anexos e mantidas sem alterações. Todas têm dimensões 738 × 1600. Foram aplicadas ao hero (Catálogo e Inventário) e à galeria (Inventário, Catálogo, Reservas, detalhes da vaga, adicionar espaço, avaliações e perfil). A captura anterior dos detalhes de armário foi preservada, totalizando oito opções.

O componente Phone centraliza o mapeamento com imports estáticos do Next.js. A moldura usa `object-fit: contain`, sem distorção ou recorte das capturas. As larguras dos smartphones do hero foram ajustadas para acomodar a nova proporção. A grade mobile distribui os oito seletores sem uma última opção artificialmente expandida.

Arquivos atualizados: `src/components/phone.tsx`, `src/components/showcase.tsx`, `src/app/globals.css`, `README.md` e este relatório. Nenhuma dependência foi adicionada e o aplicativo Expo não foi alterado.

Validação desta atualização:
- `npm run typecheck`: aprovado.
- `npm run lint`: aprovado sem erros ou avisos.
- `npm run build`: aprovado.
- Oito seleções da galeria verificadas no navegador: estado selecionado, descrição e imagem correspondente corretos.
- Larguras 320, 375, 390, 768, 1024, 1440 e 1920: sem overflow horizontal e sem imagens quebradas entre as carregadas.
- Hero atualizado inspecionado em desktop; menu mobile e navegação à galeria verificados.
- Console da revisão sem erros ou avisos.
- Evidências: `verification/images-updated-desktop.png` e `verification/images-updated-widths.json`.

A prévia temporária de validação foi encerrada. Para usar a mesma porta da aba anterior: `npm run dev -- --port 3001` e abrir http://127.0.0.1:3001.
