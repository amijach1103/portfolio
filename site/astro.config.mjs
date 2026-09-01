import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://aguedaschwartz.com',
  base: '/',
  redirects: {
    '/work': '/projects',
    '/operating-system': '/practice'
  },
  integrations: [mdx(), tailwind()]
});
