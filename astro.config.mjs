import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: ["**/Data_Engineer_Vu_Manh_Hung_CV.pdf"],
      },
    },
  },
});
