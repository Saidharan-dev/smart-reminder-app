const schedule = require('node-schedule');
const whatsapp = require('./whatsappService');
const callService = require('./callService');

// Schedules two WhatsApp reminders (3 days and 1 day before) and optional call 1 day before
exports.scheduleForEvent = (event) => {
  const eventDate = new Date(event.date);

  const threeDaysBefore = new Date(eventDate);
  threeDaysBefore.setDate(eventDate.getDate() - 3);

  const oneDayBefore = new Date(eventDate);
  oneDayBefore.setDate(eventDate.getDate() - 1);

  // schedule WhatsApp 3 days before
  schedule.scheduleJob(threeDaysBefore, () => {
    whatsapp.sendTemplateMessage(event.phoneNumber, `Reminder: ${event.title} is in 3 days.`);
  });

  // schedule WhatsApp 1 day before
  schedule.scheduleJob(oneDayBefore, () => {
    whatsapp.sendTemplateMessage(event.phoneNumber, `Reminder: ${event.title} is tomorrow.`);

    // optional: trigger phone call
    callService.callWithVoice(event.phoneNumber, `Reminder: ${event.title} is tomorrow.`);
  });
};
