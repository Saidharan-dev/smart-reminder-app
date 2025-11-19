import React, { useState } from 'react'
import api from '../services/api'

export default function AddEventForm({ onCreated }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [saving, setSaving] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await api.post('/events', { title, date, phoneNumber })
      setTitle('')
      setDate('')
      setPhoneNumber('')
      if (onCreated) onCreated()
    } catch (err) {
      console.error('Failed to create event', err)
      alert('Failed to create event; check console for details')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <h2>Add Event</h2>

      <label>Title</label>
      <input value={title} onChange={e => setTitle(e.target.value)} required />

      <label>Date & Time</label>
      <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} required />

      <label>Phone Number</label>
      <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />

      <button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Create'}</button>
    </form>
  )
}
