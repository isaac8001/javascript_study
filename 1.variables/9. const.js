// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수

const text = "hello";
// text = "hi"; 이렇게 하면 안됨

// 1. 상수(대문자로 작성해야함)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "사과",
  color: "red",
  dispaly: "🍎",
};
console.log(apple);
apple.name = "orange";
console.log(apple);

// let = 재할당 가능 변경도 가능
// const = 재할당 불가 변경 가능
// -> 객체의 경우 const를 사용해도 안에 있는 값은 변경이 가능하다.
// 이유는 메모리셀은 객체의 경로를 가지고있기 때문이다.
