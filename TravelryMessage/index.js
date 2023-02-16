// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer APIKEY'
  },
  body: JSON.stringify({
    "message": {
      "to": {
        "email": "testhong30@gmail.com"
      },
      "content": {
        "body": "Thanks for subscribing to us. We will send you discounted emails about our travel packages.",
        "title": "Welcome to Travelry"
      }
    }
  })
};

fetch('https://api.courier.com/send', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
