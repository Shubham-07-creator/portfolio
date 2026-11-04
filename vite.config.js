import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function copy404Plugin() {
  return {
    name: 'copy-404-html',
    closeBundle() {
      const distIndex = path.resolve(__dirname, 'dist', 'index.html')
      const dist404 = path.resolve(__dirname, 'dist', '404.html')
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, dist404)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || (process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/'),
  plugins: [
    react(),
    tailwindcss(),
    copy404Plugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'vendor-icons';
            }
          }
        },
      },
    },
  },
})
