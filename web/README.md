# Smart Reminder — Web Frontend

This is a minimal React + Vite frontend for the Smart Reminder backend.

Quick start (from repository root):

```bash
cd web
npm install
npm run dev
```

Default backend base URL is `http://localhost:3000`. To change it, set `VITE_API_BASE` before running, for example:

```bash
VITE_API_BASE=http://localhost:3000 npm run dev
```

Pages:
- Add Event: create a new reminder event (title, date, phone number)
- Upcoming Events: lists events fetched from `GET /events`
