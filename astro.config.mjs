import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import { fileURLToPath } from "node:url";

export default defineConfig({
  adapter: vercel({ maxDuration: 20 }),
  vite: {
    envDir: fileURLToPath(new URL("./src/env", import.meta.url)),
    server: {
      watch: {
        ignored: ["**/Data_Engineer_Vu_Manh_Hung_CV.pdf"],
      },
    },
  },
});
