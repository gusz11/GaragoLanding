# Garago — Landing page

Aplicação web independente do aplicativo Expo, feita com Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion e Lucide React. Usa Poppins local, o logotipo original e oito capturas reais do Garago, incluindo as sete imagens fornecidas em `public/images`.

## Executar localmente

Requer Node.js 20.9 ou superior. No PowerShell:

```powershell
cd C:\Users\gusta\Documents\ChatGPT\Garago-Landing
npm ci
npm run dev
```

Acesse http://localhost:3000. Caso as dependências já estejam instaladas, basta `npm run dev`.

```powershell
npm run typecheck
npm run lint
npm run build
npm start
```

Não é necessário iniciar o backend nem o Expo. A página não acessa APIs, não cria contas e não usa credenciais do aplicativo.

## Estrutura e conteúdo

- `src/app/page.tsx`: narrativa, problema/solução, três etapas, funcionalidades, benefícios, CTA e rodapé.
- `src/components/`: header com menu acessível, hero, moldura de smartphone, galeria de oito telas e FAQ.
- `src/app/globals.css`: tokens, tipografia, composição e responsividade.
- `public/brand/`: marca original do projeto.
- `public/images/`: capturas fornecidas para Inventário, Catálogo, Reservas, vaga, cadastro de espaço, avaliações e perfil.
- `public/screens/`: capturas anteriores; a imagem dos detalhes de armário continua em uso.
- `src/app/fonts/`: Poppins e licença da fonte.
- `src/app/opengraph-image.tsx`: imagem social gerada localmente.
- `DESIGN.md`: direção visual.
- `VERIFICATION.md`: resultados e limites da validação.

A galeria combina as sete capturas fornecidas pelo responsável pelo projeto com a captura anterior dos detalhes de armário. Os originais foram preservados em `public/images`, sem recortes ou alterações de conteúdo. Next.js otimiza as imagens e usa suas dimensões reais; a moldura mantém a proporção e utiliza `object-fit: contain`. São imagens estáticas de diferentes etapas do desenvolvimento, com anúncios e períodos demonstrativos. Não representam ofertas comerciais nem prazos atuais.

O conteúdo identifica o Inventário integrado e os fluxos demonstrativos de catálogo e reservas. Pagamentos, renovações e entregas demonstrativas não são apresentados como operações reais. Não há links inventados para lojas, contato ou inscrição.

## Identidade e referências

A direção mantém Poppins, azul-marinho, azul, ciano e roxo do Garago. A composição usa linhas de demarcação de vagas, duas telas em profundidade no hero e uma galeria editorial, com entrada sutil e transições acionadas pelo visitante. `prefers-reduced-motion` é respeitado no CSS e no Motion.

- [Frontend Garago](https://github.com/GaragoOrganization/Garago_Front)
- [Figma do produto](https://www.figma.com/design/KBlJnvsJA9ppJT9difjEnH/Prototype-Garago?node-id=2-2337)
- [Documentação Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Motion e movimento reduzido](https://motion.dev/docs/react-use-reduced-motion)

## Antes de publicar

Configure `SITE_URL` com a origem HTTPS real do site, usando `.env.example` como referência. Essa variável define a origem dos metadados sociais; o padrão serve apenas para localhost. Não há domínio comercial presumido nem deploy automático.

O projeto tem `package.json`, lockfile e configuração próprios e pode ser mantido em um repositório independente. Nenhum arquivo do app Expo é importado em runtime.


