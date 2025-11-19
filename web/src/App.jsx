import React, { useEffect, useState } from 'react'
import EventList from './components/EventList'
import AddEventForm from './components/AddEventForm'
import api from './services/api'

export default function App() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const res = await api.get('/events')
      setEvents(res.data || [])
    } catch (err) {
      console.error('Failed to fetch events', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchEvents() }, [])

  return (
    <div className="container">
      <header>
        <h1>Smart Reminder</h1>
        <p className="subtitle">Web frontend for your Smart Reminder backend</p>
      </header>

      <main>
        <section className="left">
          <AddEventForm onCreated={() => fetchEvents()} />
        </section>

        <section className="right">
          <h2>Upcoming Events</h2>
          <EventList events={events} loading={loading} />
        </section>
      </main>
    </div>
  )
}
