//웹상에서 데이터를 주고받을 때의 표준 "json"
let person = {
  name: '홍길동',
  age: 23,
  phone: '010-0000-0000',
  kor: 90,
  eng: 80,
  mat: 60,
};

console.log(person.name, person.age, person.phone);
console.log(person['name'], person['age'], person['phone']);
console.log(person);
console.log('---------------------------------------------------');
console.log('---------------------------------------------------');
//새로운 property 추가하기
person.total = person.kor + person.eng + person.mat;
console.log(person.total);

person.avg = person.total / 3;
console.log(person.avg);

console.log(
  `${person.name}의 총점은 ${person.total}이고 평균은 ${person.avg}입니다`
);
console.log(person);

console.log('---------------------------------------------------');
console.log('{}에 감싸져서 나오지 않음--------------------------------------');
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}:${value}`);
}
