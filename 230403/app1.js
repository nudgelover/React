var express = require('express');
var app = express();

//express  모듈 자체가 use, get, post 함수 3개가 있음
//use - get, post가 오던
//get -get 방식으로 온 것만
//post -post 방식으로 온 것만

app.use('/test', (req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>test</h1>');
});

app.get('/get', (req, res) => {
  rep.writeHead(200, {'Content-type': 'text/html'});
  rep.end('<h1>get</h1>');
});

app.get('/userinfo', (req, res) => {
  let userinfo = {name: 'tom', phone: '010-7659-0206'};
  res.send(userinfo);
});
// http://127.0.0.1:4000/userinfo2?name=jane&phone=01000000000
app.get('/userinfo2', (req, res) => {
  let userinfo = {name: req.query.name, phone: req.query.phone};
  res.send(userinfo);
});
// http://127.0.0.1:4000/userinfo3/jane/user01
app.get('/userinfo3/:username/:userid', (req, res) => {
  let userinfo = {username: req.params.username, userid: req.params.userid};
  res.send(userinfo);
});

app.post('/post', (req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>post</h1>');
});

//다른 url이 없을 때 처리한다.
app.use((res, rep) => {
  rep.writeHead(200, {'Content-type': 'text/html'});
  rep.end('<h1>Express</h1>');
});

app.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
