import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@hooks': path.resolve(__dirname, './src/hooks'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@types': path.resolve(__dirname, './src/types'),
          '@assets': path.resolve(__dirname, './src/assets'),
        }
      },
      server: {
        port: 3000,
        open: true
      }
    };
});
