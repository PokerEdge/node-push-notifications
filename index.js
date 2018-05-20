const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const config = require ('./config');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = config.publicVapidKey;
const privateVapidKey = config.privateVapidKey;

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload (this is optional, but using the title of notication as payload)
  const payload = JSON.stringify({ title: 'Push Test' });

  // Pass the object into the sendNotifcation function
  webpush
  .sendNotifcation(subscription, payload)
  .catch(err => console.error(err));

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
