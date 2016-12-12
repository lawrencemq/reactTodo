var express = require('express');

// Create out app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {

  if (req.headers['x-forwarded-proto' === 'https']) {
      res.redirect('http://' + req.hostname + req.url);
  } else {
      next();
  }
});

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Express serer is up on port ${PORT}`);
});
