const express = require('express');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use('/events', eventRoutes);
app.get('/', (req, res) => res.send('Smart Reminder Backend'));
module.exports = app;