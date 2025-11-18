const Event = require('../models/Event');
const scheduler = require('../services/scheduler');

exports.createEvent = async (req, res) => {
  try {
    const { title, date, phoneNumber } = req.body;
    const event = await Event.create({ title, date, phoneNumber });

    // schedule reminders
    scheduler.scheduleForEvent(event);

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listEvents = async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
};
