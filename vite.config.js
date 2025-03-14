import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Third/',
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.jpg', '**/*.png'],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, 'public/404.html')
      }
    }
  },
  publicDir: 'public'
}) 