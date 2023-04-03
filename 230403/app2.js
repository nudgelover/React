var express = require('express');
var app = express();

//http://127.0.0.1:4000/add?x=45&y=7
//http://127.0.0.1:4000/add/45/7

app.get('/add', (req, res) => {
  let cal = {
    x: req.query.x,
    y: req.query.y,
    add: parseInt(req.query.x) + parseInt(req.query.y),
  };

  res.send(cal);
});

app.get('/add/:x/:y', (req, res) => {
  //방법2
  x = req.params.x;
  y = req.params.y;
  z = parseInt(x) + parseInt(y);

  res.send({x: x, y: y, z: z});
});

app.use((res, rep) => {
  rep.writeHead(200, {'Content-type': 'text/html'});
  rep.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
