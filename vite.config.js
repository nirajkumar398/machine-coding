import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          cspDirectives: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; media-src 'self' https://directus.upliftnaturereserve.com https://patreon.com",
        },
      },
    }),
  ],
  base: "/machine-coding",
  build: {
    outDir: "./docs",
  },
});
