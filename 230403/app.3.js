var express = require('express');
var app = express();

//bodyParser  모듈이 있는데 모듈을 설치하고 =>
app.use(express.urlencoded({extended: false})); //미들웨어
//이 작업을 해주면,, express자체적으로 body에 데이터를 가져온다
//미들웨어 , app 객체 만들고, 다른 url 처리 전에 호출되면 된다
app.post('/add', (req, res) => {
  let x = req.body.x;
  let y = req.body.y;
  let z = parseInt(x) + parseInt(y);
  res.send({x: x, y: y, z: z});
});

app.use((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});

