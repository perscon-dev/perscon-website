// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.perscon.com.mx',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;

        if (
          /\/licencias-cofepris\/[^/]+\/$/.test(url) &&
          !url.includes('/ciudad/')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/licencias-cofepris/ciudad/')) {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        } else if (url.includes('/recursos/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url === 'https://www.perscon.com.mx/') {
          item.priority = 1;
          item.changefreq = 'weekly';
        }

        return item;
      },
    }),
  ],
});