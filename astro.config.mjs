import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nozarealestate.ae',
  trailingSlash: 'always',
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-AE', ar: 'ar-AE' } }, filter: (u) => !u.includes('/404') })],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
