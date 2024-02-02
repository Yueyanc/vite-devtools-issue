import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteDevtools from "vite-plugin-vue-devtools";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteDevtools()],
});
