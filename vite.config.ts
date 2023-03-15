import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import removeConsole from "vite-plugin-remove-console";
import viteCompression from "vite-plugin-compression";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    removeConsole(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),],
})
