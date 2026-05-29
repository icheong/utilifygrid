import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yoursite.com', // ← Replace with your domain
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static', // Pure static = best for Cloudflare Pages SEO
});
