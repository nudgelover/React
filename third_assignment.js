var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();

app.use(express.urlencoded({extended: false}));
app.get('/scoreform', (req, res) => {
  fs.readFile('./html/third_assignment.html', 'utf-8', (err, data) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(ejs.render(data));
  });
});

app.get('/score', (req, res) => {
  let name = req.query.name;
  let kor = parseInt(req.query.kor);
  let eng = parseInt(req.query.eng);
  let mat = parseInt(req.query.mat);
  let sum = kor + eng + mat;
  let avg = sum / 3;

  res.send(`${name}님의 총점은 ${sum}점이고 평균은 ${avg}점 입니다.`);
});

app.use((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
