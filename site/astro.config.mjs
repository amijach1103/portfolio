import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://aguedaschwartz.com',
  base: '/',
  redirects: {
    '/projects': 'https://github.com/amijach1103',
    '/work': 'https://github.com/amijach1103',
    '/operating-system': 'https://github.com/amijach1103',
    '/case-studies': 'https://github.com/amijach1103',
    '/journey': '/',
    '/practice': 'https://github.com/amijach1103',
    '/notes': '/',
    '/blog': '/',
    '/quick-facts': '/',
    '/prd/assessment-platform': 'https://github.com/amijach1103'
  },
  integrations: [mdx(), tailwind()]
});
