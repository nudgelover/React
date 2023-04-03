var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');

app.set('view engin', ejs); //환경설정, 내부 변수에 값을 설정한다
app.use(express.urlencoded({extended: false})); //미들웨어 사용한다

app.get('/', (req, res) => {
  fs.readFile('html/index.html', 'utf-8', (error, data) => {
    res.send(data.toString());//toString 생략해도 나오긴하나.. 없는 경우 오류가 나는 경우가 있어서 넣어줌
  });
});
app.use((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
