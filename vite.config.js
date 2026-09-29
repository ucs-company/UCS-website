import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* https://vite.dev/config/
   base is relative so the built site can be dropped into any sub-folder
   (or opened straight from disk) without rewriting asset paths. */
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: true,
  },
});
