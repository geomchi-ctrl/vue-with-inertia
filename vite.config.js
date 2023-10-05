import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(), // Adicione o plugin Vue
    laravel({
      input: [
        'resources/js/app.js',
        'resources/css/app.css',
      ],
      refresh: true,
    }),
  ],
});