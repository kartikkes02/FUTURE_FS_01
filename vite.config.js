import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/Portfolio",
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      "@" : path.resolve(__dirname , './src'),
    },
  },
});
