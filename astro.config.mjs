import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erabi-tsushin.mini74sion.workers.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
