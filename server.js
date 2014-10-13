var express = require('express');
var routerMiddleware = require('connect-monorouter');
var Router = require('./router');
var path = require('path');

port = process.env.PORT || 5000;

express()
  .use(routerMiddleware(Router))
  .get('/bundle.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'bundle.js'));
  })
  .get('/pets', function(req, res) {
    res.json([
      {name: 'Winston'},
      {name: 'Chaplin'},
      {name: 'Bennie'}
    ]);
  })
  .listen(port, function() {
    console.log("Listening on " + port + ".");
    console.log("Go to <http://localhost:" + port + "> in your browser.");
  });
