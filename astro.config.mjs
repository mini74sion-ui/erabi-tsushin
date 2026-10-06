import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erabi-tsushin.pages.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
