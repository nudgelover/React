//웹상에서 데이터를 주고받을 때의 표준 "json"
let students = [
  {
    name: '홍길동',
    kor: 90,
    eng: 90,
    mat: 80,
  },
  {
    name: '장길산',
    kor: 80,
    eng: 80,
    mat: 100,
  },
  {
    name: '임꺽정',
    kor: 70,
    eng: 70,
    mat: 90,
  },
  {
    name: '김진희',
    kor: 100,
    eng: 100,
    mat: 100,
  },
];

for (i = 0; i < students.length; i++) {
  students[i].total = students[i].kor + students[i].eng + students[i].mat;
}

console.log('for구문-------------------------------------------------');
for (i = 0; i < students.length; i++) {
  console.log(`${students[i].name}${students[i].total}`);
}

console.log('for in 구문-------------------------------------------------');
for (i in students) {
  console.log(`${students[i].name}${students[i].total}`);
}

console.log('for of 구문-------------------------------------------------');
for (item of students) {
  console.log(`${item.name}${item.total}`);
}

console.log('for each 구문-------------------------------------------------');
students.forEach((e) => {
  console.log(`${e.name}${e.total}`);
});
