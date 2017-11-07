var express = require('express');
var bodyParser = require('bodyParser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '../client/dist'));




app.listen(3000, function() {
  console.log('Listening on port 3000');
});