import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@mui/material/AppBar',  // Ensure this is included if you had issues earlier
        '@mui/icons-material/Menu'  // Add specific icon to external list
      ]
    }
  }
})
