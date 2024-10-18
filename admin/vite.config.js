import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {port : 5174},
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-router-dom'], 
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Ensure this matches your project structure
    },
  },
})
