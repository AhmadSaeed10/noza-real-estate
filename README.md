# NOZA Real Estate, Astro site (EN + AR)

Rebuild of nozarealestate.ae in Astro. English at `/`, Arabic (RTL) at `/ar/`, with a language switcher in the header.

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Before launch (needs your input)
1. **Forms**: copy `.env.example` to `.env` and set `PUBLIC_FORM_ENDPOINT` (Formspree/Basin/own API). Without it, forms open WhatsApp with the lead pre-filled.
2. **Analytics**: set `PUBLIC_GA4_ID`. Events pushed to `dataLayer`: `generate_lead`, `whatsapp_click`, `request_price`, `callback_open`, `service_enquiry`, `area_enquiry`.
3. **Project data** (`src/data/projects.ts`): the live site repeats "Sobha Realty / Motor City / AED 1,007,000" on ten listings (template data), so those fields are not reused. Fill `developer`, `community`, `from` (AED) once verified; empty fields are hidden and price shows "Price on request".
4. **Images**: pages hotlink images from the current WordPress uploads. Download them into `public/images/` and update paths before the old site is switched off.
5. **Arabic copy**: have a native speaker review all `ar` strings (`src/data/*.ts`).
6. **Office address and email**: not on the live site, so not shown. Add to `src/data/site.ts` and the schema in `src/layouts/Base.astro` when available.
7. **Legal pages**: `Simple.astro` has short placeholder privacy and terms text. Replace with reviewed copy.

## SEO / GEO / AEO included
- Same URL paths as the live site (`/marina/`, `/about-noza-real-estate/`, `/services/`, `/contact-us/`, ...) so rankings carry over.
- Per-page title, description, canonical, hreflang (en-AE, ar-AE, x-default), Open Graph.
- JSON-LD: RealEstateAgent, WebSite, BreadcrumbList, FAQPage, ItemList, Place, Residence, Service, Article, Person, ContactPage.
- Answer-first guides at `/blog/` and FAQ blocks for answer engines.
- `sitemap-index.xml` with alternates, `robots.txt` allowing AI crawlers, `llms.txt`.
- Old WordPress project URLs use `?p=ID`; map them with 301 redirects at the host (Vercel/Netlify `redirects`) to `/projects/<slug>/`.

## Structure
`src/data/` content (bilingual `{en, ar}`) | `src/views/` page templates | `src/pages/` thin routes (EN + `ar/`) | `src/components/` | `src/layouts/Base.astro` head, header, footer, forms script

## Deploy (Netlify)
`netlify.toml` holds the build settings (`npm run build`, publish `dist`, Node 22), security and cache headers, and redirects.
1. Netlify > Add new site > Import from Git > pick this repo. Build settings are read from `netlify.toml`.
2. Site configuration > Environment variables: add `PUBLIC_FORM_ENDPOINT` and `PUBLIC_GA4_ID`, then redeploy.
3. Add the WordPress `?p=ID` 301s in the commented block in `netlify.toml`.
4. Domain management: add `nozarealestate.ae` (and `www`) when ready to switch.
