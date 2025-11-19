import axios from 'axios'

// Vite exposes environment variables on `import.meta.env` in the browser.
// Default to a relative base URL so the dev server's proxy handles API
// requests (this avoids direct calls to http://localhost:3000 which
// some browser extensions block). If `VITE_API_BASE` is set, use it.
const API_BASE = import.meta.env.VITE_API_BASE || ''

const instance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})

export default instance
