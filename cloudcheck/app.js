var express = require('express');
var app = express();

app.get('/ping', function (req, res) {
	res.json({ ping: "pong" });  
});

app.get('/', function (req, res) {
	res.json({ endpoints: ["GET    /exercises",
  "GET    /exercises/:id",
  "GET    /exercises/:id/:path",
  "PUT    /readme/:id",
  "DELETE /readme/:id/:name",
  "PUT    /grade/:id",
  "GET    /grade/:id",
  "GET    /",
  "GET    /ping"] });  
});

app.get('/exercises', function (req, res) {
	// No auth
	// TODO pull all exercizes from MongoDB
	res.json({ exercises: [] });  
});

var server = app.listen(1337, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});