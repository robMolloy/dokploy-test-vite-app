import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH2,
  plugins: [react(), Pages()],
});
