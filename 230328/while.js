let flag = false;
let i = 0;
let j = 0;
while (true) {
  i = i + 1;
  while (true) {
    console.log(i, j);
    j = j + 1;
    if (j >= 5) {
      flag = true;
      break;
    }
  }
  if (flag) break;
}

//한번더 이해가 필요한 부분...!
