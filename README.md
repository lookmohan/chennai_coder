# Chennai Coder — Business Website

React + TypeScript + Vite + Tailwind CSS + React Router + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Build for production with `npm run build` (type-checks, then bundles).

## Theme

Light, clean and professional — off-white background (`#F7F8FC`), white
cards with soft shadows, and the brand's blue-to-cyan gradient (from the
logo) as the accent throughout. Typography is Space Grotesk (headings) +
Manrope (body).

## Animation

Every section reveals on scroll (fade + slide, staggered across grids/lists).
Buttons, cards and nav links have hover/tap motion. Page navigation
cross-fades via Framer Motion's `AnimatePresence`, and the page scrolls to
the top once the old page has finished fading out. The mobile menu slides
open/closed with staggered item entrances. The FAQ accordion animates open
height rather than snapping.

Reduced motion: Framer Motion animations respect the visitor's OS
"reduce motion" setting (via `MotionConfig` in `src/main.tsx`), as do the
CSS transitions. The slow background scenery (`.ambient`) is deliberately
exempt — see `src/index.css`.

## Site structure (multi-page)

- `/` — Home: hero + condensed previews of every section below, each
  linking to its full page
- `/services` — full service breakdown
- `/projects` — all verified projects (real GitHub links only)
- `/training` — full course list
- `/about` — founder bio + why Chennai Coder
- `/contact` — enquiry form + FAQ
- `/privacy`, `/terms` — policy pages
- Breadcrumbs on every inner page

Routing is client-side (React Router). `_redirects` (Netlify) and
`vercel.json` (Vercel) are included so deep links like `/about` don't 404
on a fresh page load — if you deploy elsewhere, make sure the host
rewrites all paths to `index.html`.

## SEO

`src/hooks/usePageTitle.ts` sets the title, description, canonical URL and
Open Graph / Twitter tags for each page. The site's public URL lives in
`src/lib/site.ts` (`SITE_URL`). The 404 page is marked `noindex`.

## Still needed

- A 1200×630 social-share image (`og:image` / `twitter:image` currently use the logo)
- Real training prices, once decided (currently "Contact for pricing")
- A decision on the contact form: keep the WhatsApp behavior, or wire it
  to a backend / service like Formspree
- Decide whether to keep the `aggregateRating` block in the JSON-LD
  (`index.html`) — Google's guidelines discourage self-published ratings
- Privacy policy: mention Google Fonts, or self-host the fonts
- `src/components/ScrollToTop.tsx` and `src/components/GlobeBackground.tsx`
  are no longer used and can be deleted
