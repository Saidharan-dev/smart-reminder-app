module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/smart-reminder',
  WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN || '<YOUR_WHATSAPP_TOKEN>',
  WHATSAPP_NUMBER_ID: process.env.WHATSAPP_NUMBER_ID || '<YOUR_WHATSAPP_NUMBER_ID>',
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || '<TWILIO_SID>',
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || '<TWILIO_TOKEN>',
  ELEVEN_API_KEY: process.env.ELEVEN_API_KEY || '<ELEVEN_API_KEY>'
};
