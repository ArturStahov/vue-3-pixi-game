import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const isProduction = process.argv.includes('production');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: isProduction ? '/vue3-typescript-vite-pixijs-boilerplate/' : '/',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  }
})
