# Bússola das Trilhas

(antes chamado Triper)

Guia de trilhas e montanhas do Brasil: seis rotas, do nascer do sol no Caparaó ao Pico da Neblina, com dificuldade, duração, melhor época e uma lista do que levar.

**No ar:** https://tripper-landing.netlify.app

Projeto de estudo de **Next.js e animações CSS**. A versão 1 (2022) era uma landing com conteúdo fictício. A versão 2 refaz tudo:

| | v1 (2022) | v2 |
| --- | --- | --- |
| Stack | Next 12, React 17, pages router | Next 16, React 19, App Router, TypeScript estrito |
| Entrega | servidor Next | site 100% estático (`output: "export"`), 14 páginas geradas no build |
| Idiomas | i18next carregando JSON no navegador | rotas `/pt/` e `/en/` geradas no build, sem biblioteca |
| Parallax | `scroll` em JS com `setState` a cada pixel | `animation-timeline: scroll()` em CSS, sem JavaScript |
| Conteúdo | 3 textos com `dangerouslySetInnerHTML` | 6 destinos com página própria, filtros, "quero ir" e checklist |
| Mídia | vídeo de 6 MB e imagens no Cloudinary | vídeo de 560 KB e imagens WebP servidos pelo site |
| Celular | título coberto pela imagem | layout pensado para 360 px |
| Qualidade | sem testes | Vitest + Testing Library, ESLint, CI com gitleaks e `npm audit` |
| Segurança | sem cabeçalhos | CSP, HSTS, `X-Frame-Options` e afins em `public/_headers` |

## O que tem

- **Destinos** com filtro por dificuldade e duração e marcação "quero ir" salva no navegador.
- **Página de cada rota** com altitude, duração, dificuldade, meses ideais, dicas e como chegar.
- **Silhueta da subida** desenhada em SVG a partir de um perfil ilustrativo.
- **Checklist da mochila** com progresso salvo no navegador.
- **Animações** só com CSS: entrada do título, revelação no scroll (`animation-timeline: view()`), desenho do perfil e transição entre páginas. Tudo respeita `prefers-reduced-motion`.

As fotos são ilustrativas (banco de imagens) e não mostram os destinos. Altitudes marcadas com `~` são estimativas.

## Rodando

```bash
npm ci
npm run dev        # http://localhost:3000/pt/
npm run check      # lint + typecheck + testes + build
npm start          # serve a pasta out/ gerada pelo build
```

## Estrutura

```
src/app/[lang]/                 layout, home e template (transição)
src/app/[lang]/destinos/[slug]/ página de cada destino
src/app/global-not-found.tsx    404
src/components/                 cards, filtros, checklist, perfil
src/lib/                        dados, i18n, filtros, formatação, localStorage
test/                           testes
public/_headers, _redirects     cabeçalhos de segurança e redirecionamento de idioma (Netlify)
```

Feito por [Pedro Lopes](https://pedrolopes.tech).
