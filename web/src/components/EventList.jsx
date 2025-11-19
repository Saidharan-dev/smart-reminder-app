import React from 'react'

function formatDate(d) {
  try {
    const dt = new Date(d)
    return dt.toLocaleString()
  } catch (e) {
    return d
  }
}

export default function EventList({ events, loading }) {
  if (loading) return <div>Loading...</div>
  if (!events || events.length === 0) return <div>No events yet.</div>

  return (
    <ul className="event-list">
      {events.map(ev => (
        <li key={ev._id} className="event-item">
          <div className="event-title">{ev.title}</div>
          <div className="event-date">{formatDate(ev.date)}</div>
          <div className="event-phone">{ev.phoneNumber}</div>
          {ev.reminders && ev.reminders.length > 0 && (
            <div className="event-reminders">
              Reminders: {ev.reminders.map(r => new Date(r).toLocaleString()).join(', ')}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
