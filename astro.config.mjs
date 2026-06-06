import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical origin once the custom domain is live. Until then GitHub Pages
// serves at https://<user>.github.io/<repo>/ — see README for the temporary
// site/base settings.
export default defineConfig({
  site: 'https://alfredwilliamson.com',
  integrations: [sitemap()],
  trailingSlash: 'always'
});
