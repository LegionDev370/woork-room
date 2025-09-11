import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
export default defineConfig({
  plugins: [react(), tailwindcss(), nodePolyfills()],
  preview: {
    port: 4173,
    allowedHosts: ["fiver.uz", "www.fiver.uz", "localhost"],
  },
  server: {
    proxy: {
      "/socket.io": {
        target: "http://localhost:3000",
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
});
