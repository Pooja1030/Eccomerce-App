import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // You can keep other externals if needed
      external: ['react-router-dom','react-toastify','react-toastify/dist/ReactToastify.css'], // Ensure any external dependencies are listed here
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Adjust this alias as per your project structure
    },
  },
  optimizeDeps: {
    include: ['react-toastify', 'react-router-dom','react-toastify/dist/ReactToastify.css'], // Include both libraries
  },
});
