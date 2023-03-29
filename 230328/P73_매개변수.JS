//자바스크립트의 매개변수는 변수이름만 쓰자
//함수의 정의 또는 선언
function sayHello(name) {
  console.log(`안녕하세요 ${name}님`);
}

sayHello('홍길동');
sayHello('김진희');
sayHello('장길산');

//매개변수 기본값--------------------------------------------------------------------------
//없을 때
function Xmyfun(a, b, c) {
  return a + b + c;
}
//console.log(myfun(1, 2)); c is not defined
console.log(Xmyfun(1, 2, 3)); //6출력

//있을 때
//매개변숭 기본값을 부여한다.
//함수 호출시에 매개변수위치에 값을 안주면 기본값들은 적용하여 연산한다
//매개변수에 기본값을 부여할 때 기본값을 안주는 변수들은 먼저 기술하고, 기본값을 부여하는 변수들은 나중에 기술해야한다.
//함수의 이름은 무조건 달라야 한다. - 오버로딩을 지원하진 않지만, 기본값을 통해 마치 오버로딩을 하는 것과 동일한 효과를 얻는다.
function myfun(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(myfun()); //60
console.log(myfun(1)); //51
console.log(myfun(1, 2)); //33
console.log(myfun(1, 2, 3)); //6

//매개변수를 활용한 합계계산---------------------------------------------------------------------------

function sigma(limit = 10) {
  if (limit < 0) {
    //에러체크는 함수 들어가자마자 하고, return으로 함수 종료 !! if else 말고 return 쓰는게 좋다
    return 0; //return은 값을 보내기 위한 용도로만 쓰는게 아니라 함수를 종료하기 위한 목적으로도 사용한다.
  }
  sum = 0;
  for (i = 0; i < limit; i++) {
    sum += i;
  }
  return sum; //반환값은 하나만 또는 없거나..
}

console.log(sigma());
let result = sigma();
console.log(result);
console.log(sigma(100));
console.log(sigma(1000));
console.log(sigma(-3));



