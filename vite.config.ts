import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // ✅ NEW IMPORT
import path from "path";

const __dirname = path.resolve();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: 3001,
      host: "0.0.0.0",
    },

    plugins: [
      react(),

      // ✅ NEW: Image Optimization Plugin
      // This runs during 'npm run build' to compress images automatically
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 75 },
        webp: { quality: 80, lossless: true },
        svg: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false,
                },
              },
            },
            "sortAttrs",
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
              },
            },
          ],
        },
      }),

      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",

        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "mask-icon.svg",
        ],

        manifest: {
          name: "Discover Vung Tau",
          short_name: "Vung Tau Like",
          description:
            "Experience Vung Tau like a local with our curated guides",
          theme_color: "#2563EB",
          background_color: "#FFFFFF",
          display: "standalone",
          scope: "/",
          start_url: "/",
          orientation: "portrait-primary",

          icons: [
            {
              src: "icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],

          shortcuts: [
            {
              name: "Discover Vung Tau",
              short_name: "Vung Tau Like",
              description: "Experience Vung Tau like a local",
              url: "/",
              icons: [
                {
                  src: "icons/icon-192x192.png",
                  sizes: "192x192",
                },
              ],
            },
          ],
        },

        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,

          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === "image",
              handler: "CacheFirst",
              options: {
                cacheName: "images-cache",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
              },
            },
          ],
        },
      }),
    ],

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.OPENWEATHER_API_KEY": JSON.stringify(
        env.OPENWEATHER_API_KEY
      ),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      sourcemap: false,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 600,

      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            router: ["react-router-dom"],
          },
        },
      },
    },
  };
});