var express = require('express');
var app = express();

app.use((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
