var express = require('express');
let bodyParser = require('body-parser');
let config = require('../client/src/config');
let fetch = require('node-fetch');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   // if (!req.body) {
//   //   res.redirect(config.url);
//   // } else {
//   //   res.status(302).send(req.body);
//   // }
// });

app.get('/authed', (req, res) => {
  let codeIdx = req.url.indexOf('code=') + 5;
  let code = req.url.slice(codeIdx);
  let grantType = 'authorization_code';
  let redirectURI = 'http://localhost:3000/authed';
  let parameters = 'grant_type=' + grantType + '&code=' + code + '&redirect_uri=' + redirectURI;

  fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(config.id + ':' + config.secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': parameters.length
    },
    body: parameters
  }).then(res => res.json())
    .then(function(data) {
      if (data.error) {
        res.redirect('http://localhost:3000/error');
      } else {
        res.redirect('http://localhost:3000');
      }
    });

});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});