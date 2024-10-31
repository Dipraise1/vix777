import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Explicitly externalize 'lucide-react' to prevent build errors
      external: ['lucide-react'],
    },
  },
})
