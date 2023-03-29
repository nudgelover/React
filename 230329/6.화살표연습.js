let s = [
  {name: '홍길동', kor: 90, eng: 80, mat: 70},
  {name: '임꺽정', kor: 50, eng: 80, mat: 70},
  {name: '장길산', kor: 60, eng: 80, mat: 60},
  {name: '강감찬', kor: 70, eng: 80, mat: 80},
  {name: '이순신', kor: 80, eng: 80, mat: 70},
  {name: '김진희', kor: 100, eng: 100, mat: 100},
];

//총점 평균

s.map((item) => {
  item.total = item.kor + item.eng + item.mat;
  item.avg = item.total / 3;
  return item;
}).forEach((item) => {
  console.log(`${item.name}님의 총점은 ${item.total}점, 평균 점수는 ${item.avg}입니다.`);
});


const arr1 = [2, 1, 3];
const arr2 = ['banana', 'apple', 'orange']

arr1.sort();
console.log(arr1) // [1, 2, 3]

arr2.sort();
console.log(arr2); // ['apple', 'banana', 'orange']