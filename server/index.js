var express = require('express');
let bodyParser = require('body-parser');
let config = require('../client/src/config');
let fetch = require('node-fetch');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/redditLogin', (req, res) => {
  console.log('Attempting login with reddit');
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
  }).then(res => {
    console.log('res', res);
    res.json();

  })
    .then(data => res.send(data));
});

app.get('/authed', (req, res) => {
  // should be the page to load the posts from when you're logged in
  if (req) {
    res.send('helllloooo!!! you are authed');
  }
});

app.post('/authed/sub/:subreddit', (req, res) => {

});

app.post('/authed/unsub/:subreddit', (req, res) => {
  
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});