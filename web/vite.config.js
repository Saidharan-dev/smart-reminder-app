import { defineConfig } from 'vite'

// Simple proxy so frontend dev server forwards API requests to backend.
// This avoids cross-origin issues and often prevents browser extensions
// from blocking calls to `http://localhost:3000` directly.
export default defineConfig({
  server: {
    proxy: {
      // Proxy any request starting with /events to the backend
      '/events': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
