import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// En développement, Vite redirige /api vers FastAPI : pas besoin de CORS
// et le navigateur ne voit jamais d'autre origine que celle du frontend.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
