import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/nppm/", // 🔥 Change this to match your GitHub repo name
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the build output goes to 'dist'
  },
  server: {
    middlewareMode: false, // ✅ Disable middleware mode
    historyApiFallback: true,// Enables middleware mode with default settings
  },
});
