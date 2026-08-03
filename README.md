# Sunflower Medical

A responsive, multi-page redesign for [Sunflower Medical](https://www.sunflowermedical.co.uk/), built with Next.js 16, React 19, Tailwind CSS 4 and Motion.

## Run locally

```bash
npm install
npm run dev
```

The development site is available at [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Routes

- `/` — editorial homepage and interactive product preview
- `/products` — all nine healthcare furniture categories
- `/products/[slug]` — statically generated category pages
- `/customisation` — colours, finishes, branding and bespoke design
- `/about` — UK manufacturing and in-house capability
- `/catalogue` — current catalogue, brochure and distributor resources
- `/contact` — departmental contacts and email-based enquiry form

Legacy product-category URLs from the current website permanently redirect to their new canonical routes.

## Content and assets

Long-form source-site copy and verified resource URLs live in `lib/source-content.ts` and remain server-only. Compact interactive product data lives in `lib/content.ts`. The product imagery is stored locally under `public/products`.

Inter is self-hosted from `public/fonts/InterVariable.woff2` so production builds do not depend on Google Fonts. Its SIL Open Font License is included alongside the font.

The enquiry form intentionally opens a pre-filled draft in the visitor's email app; no form backend or third-party processor is implied.
