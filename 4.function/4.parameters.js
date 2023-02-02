// 매개변수의 기본값은 무조건 nudefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1 매개 변수 값이 undefined 일 때만 사용가능!
// 값이 있다면 전달된 값이 매개 변수로들어감.
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}
add();

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
