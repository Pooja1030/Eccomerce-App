import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url'; // Import to resolve file URLs
import path from 'path'; // Import path for resolving aliases

// Resolve the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/', // This tells Vite to serve the app from the root
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        'react-toastify',
        'prop-types',
        'axios',
      ], // Add external dependencies here if needed
    },
  },
  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
      'react-toastify': path.resolve(__dirname, 'node_modules/react-toastify'), // Added alias for react-toastify
      'axios': path.resolve(__dirname, 'node_modules/axios'), // Added alias for axios
      'prop-types': path.resolve(__dirname, 'node_modules/prop-types'), // Added alias for prop-types
      '@': path.resolve(__dirname, 'src'), // Adjust alias if necessary
    },
  },
  optimizeDeps: {
    include: ['react-toastify', 'react-router-dom', 'prop-types', 'axios'], // Pre-bundle these for optimization
  },
});
