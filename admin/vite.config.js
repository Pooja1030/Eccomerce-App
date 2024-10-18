import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-router-dom', 'react-toastify'], // Explicitly externalize these
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Adjust this alias as per your project structure
    },
  },
  optimizeDeps: {
    include: ['react-router-dom', 'react-toastify'], // Ensure they are bundled properly
  },
});
