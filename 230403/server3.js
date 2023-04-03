let http = require('http');
let fs = require('fs'); //FileSystem의 약자로,파일 처리와 관련된 여러가지 기능을 하는 js라이브러리
let url = require('url'); //url 분석을 위한 라이브러리

//http://127.0.0.1:4000?name=Tom&age=17

let server = http.createServer((request, response) => {
  console.log(request.url); //전송 url
  console.log(request.method); //전송방식

  let rurl = request.url;
  let query = url.parse(rurl, true).query;
  //string 분석 => json 객체로 전환
  //파싱한다
  console.log(query);
  if (query.name != '') {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    response.end(`이름 :${query.name} 나이 : ${query.age}`);
  }
});
server.listen(4000, () => {
  console.log('server start http://127.0.0.1:4000');
});
//npm install nodemon
