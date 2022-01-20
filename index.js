const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const accountSid = 'AC46b57e0da99ba73a09394e9cf4638e19';
  const authToken = '81d999fb1e6e1fea101b65ede727f916';
  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);

  client.messages.create({
      body: 'We have done our best to be polite, but it has not had any effect on staffs rudeness',
      from: '+19148170950',
      to:   '+917799687093',
  })
  .then((message) => res.send('The message has been sent sucessfully!'));



  res.send('Hello World')
});

app.listen(3000)
