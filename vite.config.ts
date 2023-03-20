import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import ViteRadar from 'vite-plugin-radar';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteRadar({
      analytics: {
        id: 'G-9WPX9XHJDG',
      },
    }),
  ],
});
