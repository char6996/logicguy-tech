import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Preprocessing using Vite
  preprocess: vitePreprocess(),

  kit: {
    // Use Vercel adapter for deployment
    adapter: vercel(),

    // Optional: add aliases if needed
    // alias: {
    //   $components: 'src/lib/components',
    //   $styles: 'src/lib/styles'
    // }
  }
};

export default config;
