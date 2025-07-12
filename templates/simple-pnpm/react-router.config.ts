import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter({
      // SPA mode - 静的ホスティング向け
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});