// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-router-dom'], // You can keep other externals if needed
      output: {
        // Ensure that your assets are outputted correctly
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'ReactToastify.css') {
            return 'assets/react-toastify.css'; // Customize output path if needed
          }
          return assetInfo.name;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Adjust this alias as per your project structure
    },
  },
  optimizeDeps: {
    include: ['react-toastify'], // Ensure it is included in the bundle
  },
});
