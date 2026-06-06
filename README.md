# alfredwilliamson.com

Personal site. Astro, deployed to GitHub Pages.

## Working on the site

- Essays are Markdown files in `src/content/writing/`. Frontmatter: `title`,
  `description`, `date`, optional `updated`, optional `draft: true` to hide.
- Design tokens (colors, type) are CSS variables at the top of `src/styles/global.css`.
- Pages are in `src/pages/`. The shared shell (nav, head tags, footer/contact) is
  `src/layouts/Base.astro`.

```bash
npm install        # once
npm run dev        # local preview at localhost:4321
npm run build      # production build to dist/
```

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages
on every push to `main`. One-time setup: repo Settings → Pages → Source: **GitHub Actions**.

Until the custom domain is connected: set `site: 'https://alfredffynnon.github.io'`
and `base: '/website'` in `astro.config.mjs`, and delete `public/CNAME`. Revert when
the domain goes live.

## Custom domain (when registered)

1. Register alfredwilliamson.com (Cloudflare Registrar or Porkbun, ~$11/yr).
2. DNS: `CNAME` record for `www` → `alfredffynnon.github.io`, and `A` records for the
   apex per GitHub's docs (185.199.108.153 / .109 / .110 / .111 — verify current).
3. Repo Settings → Pages → Custom domain: alfredwilliamson.com → Enforce HTTPS.
4. Restore `site: 'https://alfredwilliamson.com'`, remove `base`, restore `public/CNAME`.

## Launch-day checklist

- [ ] Verify domain in Google Search Console (DNS verification) and Bing Webmaster Tools
- [ ] Submit sitemap (`/sitemap-index.xml`); request indexing on the homepage
- [ ] Add the URL to LinkedIn, X/Instagram/GitHub bios, and any reachable Harvard pages
- [ ] Email HPR and the Crimson asking them to link the site from the existing articles
- [ ] Test on a real phone; run Lighthouse; validate JSON-LD with Google's Rich Results Test
