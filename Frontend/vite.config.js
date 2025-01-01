import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
base: "/",
build: {
  rollupOptions: {
    external: ['axios'], // Add axios to the external list
  }
}
})