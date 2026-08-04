# Safety Sphere Solution

Premium corporate website for **Safety Sphere Solution** — Fire Safety, EHS, ESG, Digital Safety, and Industrial Consulting.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion + GSAP
- React Hook Form + Zod
- Lucide Icons
- next-themes (dark mode)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Content architecture

CMS-ready content lives in `src/content/site-content.ts` and `src/lib/site.ts`. Swap these modules for a headless CMS (Sanity, Contentful, etc.) without rewriting page layouts.

## Contact / email integration

API routes:

- `POST /api/contact`
- `POST /api/newsletter`

Both validate payloads and log structured data. Connect Resend, Nodemailer, or your ESP via environment variables when ready.

## Brand

- Navy: `#0B1F45`
- Safety Red: `#E63946`
- Clean white enterprise UI with industrial imagery

# safetyspheresolution
