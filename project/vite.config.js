import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Cấu hình Build cho MERN stack
    manifest: true,
    rollupOptions: {
      // Ensure index.html is used as the HTML entry so it is processed and
      // rewritten to reference built assets in dist.
      input: "./index.html",
    },
  },
})