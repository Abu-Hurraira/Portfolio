import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')
        const indexHtml = path.resolve(distDir, 'index.html')
        const html404 = path.resolve(distDir, '404.html')
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, html404)
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three'
            if (id.includes('framer-motion') || id.includes('/motion')) return 'motion'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('react-dom') || id.includes('react-router') || id.includes('/react/'))
              return 'vendor'
          }
        },
      },
    },
  },
})

