import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/features.json": {
        target: "http://localhost:5173", // Adjust the target URL as needed
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/features.json/, "./src/views/Analytics/features.json"),
      },
    },
  },
});
