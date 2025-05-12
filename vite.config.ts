
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: false, // Set to true if changes aren't detected on some systems
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
});
