let http = require('http');
let fs = require('fs');
let ejs = require('ejs'); //npm install ejs in  pug처럼 html이랑 jas 객체 통합하여 새로운 문서 만들어주는 "템플릿 엔진"

let server = http.createServer((request, response) => {
  fs.readFile('./html/test.html', 'utf-8', (error, data) => {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
      response.end('error'); //오류상황임.
      return;
    }
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    response.end(
      ejs.render(data, {
        name: '김진희',
        age: '29',
        address: '서울시 관악구',
        limit: 10,
      })
    ); // ejs.render!!!!!!
    //ejs 템플릿 엔진을 통해서 html과 node js의 데이터를 결합한다.
  });
});

server.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
