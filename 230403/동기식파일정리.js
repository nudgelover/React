//동기식 파일 정리
//파일을 모두 읽고나서 리턴한다.
var fs = require('fs');
//require -외부모듈을 프로그램 안으로 불러온다
// 주의사항 - java의 import가 아님
//            java의 import는 라이브러리를 메모리로 불러들이는게 아니고 라이브러리 이름을 짧게 썼을 때 본래 긴 이름을 제시해주는역할
//            import java.util.list
//            List<String> list; 라고 쓰면 list의 풀네임을 써야 맞다
//            java.util.List<String> list는 너무 기니까 앞에처럼 짧게쓰고 풀네임은 위의 import구문으로 확인하라는 의미 .
//            라이브러리 자체는 이미 불려와 있는 상태다

//동기모드 함수는 반환값에 파일의 내용이 온다
var data = fs.readFileSync('./hello.js', 'utf-8');
console.log(data);
console.log('프로그램종료');

//let fs = require('fs');
//비동기식, 파일을 읽기 전에 함수가 반환되어서 반환값을 사용할 수 없다.
//콜백함수를 3번쨰 매개변수로 전달한다
fs.readFile('./hello.js', 'utf-8', (err, data) => {
  //이 함수는 파일을 모두 읽은 후에 시스템에 의해 호출 된다.
  console.log(data);
});

console.log('프로그램 완료');
