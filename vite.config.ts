import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

// ✅ Custom plugin to copy sitemap.xml to /dist after build
const copySitemap = () => {
  return {
    name: 'copy-sitemap',
    closeBundle() {
      copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist/sitemap.xml'));
    }
  };
};

export default defineConfig({
  base: "/nppm/", // 🔥 Make sure this matches your GitHub repo name
  plugins: [react(), copySitemap()],
  build: {
    outDir: "dist",
  },
  server: {
    middlewareMode: false,
    historyApiFallback: true,
  },
});
