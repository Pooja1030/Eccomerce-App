import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-toastify','react-router-dom'], // Add this line
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Ensure this is correct based on your project structure
    },
  },
});
