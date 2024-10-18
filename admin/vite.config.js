import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {port : 5174},
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias, modify according to your project structure
    },
  },

})


