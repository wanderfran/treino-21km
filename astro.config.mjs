// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wanderfran.github.io',
  base: '/treino-21km',
  vite: {
    plugins: [tailwindcss()]
  }
});
