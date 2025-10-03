<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
plugins: [react()],
build: {
manifest: true,
rollupOptions: {
input: "./src/main.jsx",
},
},
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 011633d2347fcb710e2573f9d84e3a1bff57a9f8
