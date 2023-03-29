let str = '알파코';
let str2 = '단일 따옴표';
let str3 = `백틱 ${str} ${str2}`;

console.log(str);
console.log(str2);
console.log(str3);

let name = '홍길동';
let age = 33;
let address = '서울시 관악구 대학동';

console.log(`${name}의 나이는 ${age}이고 집 주소는 '${address}'입니다.`);

let str4 = `
            진달래
                김소월
        나보기가 역겨워 가실 때에는
        말없이 고이 보내 드리오리다.
      
        `;
console.log(str4); // 그대로 저장됨.  SQL 작성 시 많이 쓴다.

let str5 = `
        이름 : ${name}
        나이 : ${age}
        주소 : ${address}
    `;
console.log(str5);

let x = 5;
let y = 2;
console.log(`${x}+${y} = ${x + y}`);
console.log(`${x}-${y} = ${x - y}`);
console.log(`${x}*${y} = ${x * y}`);
console.log(`${x}/${y} = ${x / y}`);
