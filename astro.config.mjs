// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { EnumChangefreq } from 'sitemap';

export default defineConfig({
  site: "https://www.perscon.com.mx",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        if (/\/licencias-cofepris\/[^/]+\/$/.test(url) && !url.includes('/ciudad/')) {
          item.priority = 0.9;
          item.changefreq = EnumChangefreq.WEEKLY;
        } else if (url.includes('/licencias-cofepris/ciudad/')) {
          item.priority = 0.85;
          item.changefreq = EnumChangefreq.MONTHLY;
        } else if (url.includes('/recursos/')) {
          item.priority = 0.8;
          item.changefreq = EnumChangefreq.MONTHLY;
        } else if (url.endsWith('perscon.com.mx/')) {
          item.priority = 1;
          item.changefreq = EnumChangefreq.WEEKLY;
        }
        return item;
      },
    }),
  ],
});