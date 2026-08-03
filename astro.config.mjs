import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      { protocol: 'https' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },

  adapter: cloudflare(),
});