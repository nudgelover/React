let person = [
  {name: '홍길동', age: 11, phone: '010-0000-0001'},
  {name: '임꺽정', age: 21, phone: '010-0000-0002'},
  {name: '장길산', age: 31, phone: '010-0000-0003'},
  {name: '이순신', age: 41, phone: '010-0000-0004'},
  {name: '강감찬', age: 19, phone: '010-0000-0005'},
  {name: '윤성일', age: 61, phone: '010-0000-0006'},
  {name: '서희', age: 71, phone: '010-0000-0007'},
  {name: '윤관', age: 81, phone: '010-0000-0008'},
  {name: '김종서', age: 15, phone: '010-0000-0009'},
  {name: '척준경', age: 13, phone: '010-0000-0010'},
];

person.push({name: '김진희', age: 29});

console.log(person);

person.forEach((p) => {
  console.log(
    `${p.name}의 나이는 ${p.age}세이며 휴대폰 번호는 ${p.phone}입니다.`
  );
});

//문제 : 성이 윤씨인 사람 찾기
//이때의 p는 JSON 객체가 전달된다
let result = person.filter((p) => {
  return p.name.startsWith('윤');
});
console.log(result);

//문제2 : 나이 구분하기
let ageless19 = person.filter((p) => p.age <= 19);
let age19 = person.filter((p) => p.age > 19);

console.log(ageless19);
console.log(age19);

//정렬 - 데이터를 순서대로 늘어놓는다. (오름차순, 내림차순)
let sorted = person.sort((p1, p2) => p1.age - p2.age);
//음수,0, 양수 두 객체를 비교했을 때,
//앞의 것이 작으면 음수
//둘이 같으면 0
//앞의 것이 크면 양수
console.log(sorted);

let sorted2 = person.sort((p1, p2) => {
  if (p1.name > p2.name) return 1;
  else if (p1.name < p2.name) return -1;
  else return 0;
});
console.log(sorted2);
