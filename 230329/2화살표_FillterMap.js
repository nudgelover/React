let arr = [1, 2, 4, 7, 9, 12, 24, 35, 27, 6];
//분해해서 각각 짝수와 홀수를 다른 배열에 저장하고 싶다
let odd = [];
let even = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  } else odd.push(arr[i]);
}

console.log(even);
console.log(odd);

//=> 전통적인 방법. 이게 귀찮아 져서 화살표 함수 사용 시작한것.

//배열에 fillter 함수 - 조건을 주면 조건에 맞는 데이터만 배열
// 매개변수가 하나, 반환값이 true 또는 false, 결과값이 true인것만 묶어서 준다

// function isEven(e) {
//   if (e % 2 == 0) return true;
//   else return false;
// } 밑에처럼 써도 된다.

// function isEven(e) {
//   return e % 2 == 0;
// }

// even = arr.filter(isEven);
// console.log(even);

// even = arr.filter((e) => e % 2 == 0);
// console.log(even);
// odd = arr.filter((e) => e % 2 == 1);
// console.log(odd);
// //엄청 코드가 짧아지네... 최고네...!!

// //10보다 큰것만
// let result = arr.filter((x) => x > 10);
// console.log(result);

words = [
  'school',
  'survey',
  'assembly',
  'desk',
  'pen',
  'pc',
  'os',
  'linux',
  'windows',
];

// //단어길이 5개인 것만 찾기
// wordsResult = words.filter((x) => x.length >= 5);
// console.log(wordsResult);

// arr2 = arr.map((x) => x + 10);
// console.log(arr2);
// //원본은 유지가 되고 10더해진 값 따로 출력되는 것

// //짝수에만 10 더하자
arr3 = arr.filter((x) => x % 2 == 0).map((x) => x + 10);
console.log(arr3);

//홀수에 10 곱해서 출력하기
arr
  .filter((x) => x % 2 == 1) //중간연산- 배열을 반환한다
  .map((x) => x * 10)
  .forEach((x) => console.log(x)); //최종연산

//단어도 5글자 이상을 찾아서 대문자로 변경
words
  .filter((w) => w.length >= 5)
  .map((w) => w.toUpperCase())
  .forEach((w) => console.log(w));
