console.log('for 구문');
let flowers = ['작약', '목련', '장미', '튤립'];
for (i = 0; i < flowers.length; i++) {
  console.log(i, flowers[i]);
}
//새로 추가된 문법들

console.log('for in 구문');
for (i in flowers) {
  //배열의 인덱스를 가져온다
  console.log(i, flowers[i]);
}

console.log('for of 구문');
for (i of flowers) {
  //배열의 요소를 하나씩 가져온다
  console.log(i);
}

console.log('for each');
flowers.forEach((i) => {
  console.log(i);
});
//   매개변수로 함수가 전달된다
//   메개케가 되는 변수 , 함수의 외부에서 함수 내부로 값을 전달할 때 쓰이는 변수이다.
//   forEach함수한테 함수를 준다. 매개변수하나 반환값이 없는 함수를 구성해서 전달해야한다.
//   주로 출력용으로 쓴다.
