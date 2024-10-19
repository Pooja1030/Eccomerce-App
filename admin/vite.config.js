import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure app serves from the root
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-toastify'] // Add this line
    }
  },
  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
      '@': path.resolve(__dirname, 'src'), // Aliases for project structure
    },
  },
  optimizeDeps: {
    include: ['react-toastify', 'react-router-dom', 'prop-types', 'axios'],  // Pre-bundle these for better performance
  },
});
