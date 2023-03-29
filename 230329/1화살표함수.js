let add = (x, y) => x + y; // 화살표함수, return{} 생략가능
console.log(add(4, 5));

let sigma = (limit) => {
  //매개변수 하나일때 괄호도 생략하능.
  sum = 1;
  for (i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum;
};
console.log(sigma(10));
