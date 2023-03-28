let emp = [
  {
    name: '홍길동',
    workingTime: 40,
    hourSal: 10000,
  },
  {
    name: '임꺽정',
    workingTime: 15,
    hourSal: 20000,
  },
  {
    name: '장길산',
    workingTime: 20,
    hourSal: 20000,
  },
  {
    name: '강감찬',
    workingTime: 30,
    hourSal: 15000,
  },
  {
    name: '이순신',
    workingTime: 40,
    hourSal: 30000,
  },
];

for (item of emp) {
  item['totalSal'] = item['workingTime'] * item['hourSal'];
}

console.log('출력결과는 다음과 같습니다-------------------------------');
console.log('for구문-------------------------------------------------');
for (i = 0; i < emp.length; i++) {
  console.log(
    `이름 : ${emp[i].name} 근무시간 : ${emp[i].workingTime} 시간당급여액 : ${emp[i].hourSal} 총액 : ${emp[i].totalSal}  `
  );
}

console.log('for in 구문-------------------------------------------------');
for (i in emp) {
  console.log(
    `이름 : ${emp[i].name} 근무시간 : ${emp[i].workingTime} 시간당급여액 : ${emp[i].hourSal} 총액 : ${emp[i].totalSal}  `
  );
}

console.log('for of 구문-------------------------------------------------');
for (item of emp) {
  console.log(
    `이름 : ${item.name} 근무시간 : ${item.workingTime} 시간당급여액 : ${item.hourSal} 총액 : ${item.totalSal}  `
  );
}

console.log('for each 구문-------------------------------------------------');
emp.forEach((e) => {
  console.log(
    `이름 : ${e.name} 근무시간 : ${e.workingTime} 시간당급여액 : ${e.hourSal} 총액 : ${e.totalSal}  `
  );
});
