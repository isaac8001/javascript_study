// while(조건){}
// 조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log("나 아직 살아있다!");
  if (i === 1000) {
    break;
  }
  i++;
}

// do 꼭 한번은 실행해야 할 때!
do {
  console.log("나 아직 살아있다!");
} while (isActive);