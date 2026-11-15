import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/dokploy-test-vite-app/",
  plugins: [react(), Pages()],
});
