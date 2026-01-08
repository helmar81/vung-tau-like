import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Fix for __dirname in ES modules
const __dirname = path.resolve();

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 3001, // CHANGE THIS to 3001 to avoid conflicts with zombie processes
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // Stringify these values to prevent crashes
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.OPENWEATHER_API_KEY': JSON.stringify(env.OPENWEATHER_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  }
})