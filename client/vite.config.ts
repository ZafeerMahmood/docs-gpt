import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@css": path.resolve(__dirname, "./src/css"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@icons": path.resolve(__dirname, "./src/components/icons"),
      "@auth": path.resolve(__dirname, "./src/auth"),
    },
  },
});
