let http = require('http');
let fs = require('fs');
let ejs = require('ejs'); //npm install ejs in  pug처럼 html이랑 jas 객체 통합하여 새로운 문서 만들어주는 "템플릿 엔진"

let scoreData = [
  {name: '홍일동', kor: 10, eng: 95, mat: 80},
  {name: '홍이동', kor: 20, eng: 94, mat: 70},
  {name: '홍삼동', kor: 30, eng: 93, mat: 60},
  {name: '홍사동', kor: 40, eng: 92, mat: 50},
  {name: '홍오동', kor: 50, eng: 91, mat: 80},
  {name: '홍육동', kor: 60, eng: 90, mat: 100},
];
let server = http.createServer((request, response) => {
  fs.readFile('./html/score.html', 'utf-8', (error, data) => {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
      response.end('error'); //오류상황임.
      return;
    }
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    response.end(
      ejs.render(data, {
        scoreData: scoreData,
      })
    );
  });
});

server.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
