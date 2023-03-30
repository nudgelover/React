//1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
// let x = 15;
// if (10 < x && x < 20) {
//   console.log(x);
// }

//2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// for (i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//----거꾸로
// for (i = 9; i >= 0; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 “문자열”로 출력하시오.
// let string = '';
// for (i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     string += i; ------즉 sum처럼 더하는 건데 문자열이니까 숫자가 더해지지 않고 나열되는 결과가 나옴
//   }
// }
// console.log(string);

//7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
// let i;
// let sum = 0;

// for (i = 0; i < 10; i++) {
//   sum += i;
// }
//return sum;
// console.log(sum);
// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.\
// let i = 0;
// while (i < 10) {
//   if (i % 2 === 0) console.log(i);
//   i++;
// }

//8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오

// sum = 0;
// for (let i = 1; i < 20; i++) {
//   if (i % 3 && i % 2) {
//     sum += i;
//   }
// }
// console.log(sum);

//11.  삼각형 별찍기
// let triangle = '';

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     triangle += '*';
//   }
//   triangle += '\n';
// }
// console.log(triangle);

//역삼각형
let triangle = '';
for (let i = 4; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    triangle += '*';
  }
  triangle += '\n';
}
console.log(triangle);


