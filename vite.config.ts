import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",  // Change to listen on all interfaces (commonly used for deployments)
    port: 80,
    allowedHosts: true,  // You can specify more restrictive hosts if needed
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Simplify imports from src
      crypto: "crypto-browserify",  // Use crypto-browserify for browser compatibility
    },
  },
}));
