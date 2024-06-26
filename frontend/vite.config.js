import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        landing: resolve(__dirname, "src", "pages", "landing", "index.html"),
      },
    },
  },
});
