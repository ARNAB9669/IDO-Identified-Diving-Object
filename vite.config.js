import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        // This script searches for EVERY .html file in your project
        glob.sync('**/*.html', { 
          ignore: ['dist/**', 'node_modules/**'] 
        }).map(file => [
          // This names the entry point (e.g., "src/CV/cv")
          file.slice(0, file.length - 5),
          // This tells Vite exactly where the file is
          resolve(__dirname, file)
        ])
      ),
    },
  },
});