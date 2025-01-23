import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import vue2Jsx from "@vitejs/plugin-vue2-jsx";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue$: path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js"),
    },
  },
});
