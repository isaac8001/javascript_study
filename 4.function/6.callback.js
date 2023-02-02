/**
 * !!!!!콜백함수!!!!!
 * 일급객체 first-class object
 * !함수가 일반 객체처럼 모든 연산이 가능한 것
 * - 함수의 매개변수로 전달
 * - 함수의 반환값
 * - 할당 명령문
 * - 동일 비교 대상
 *
 * !!!!!고차함수!!!!! Higher-order function
 * 인자로 함수를 받고나(콜백함수)
 * 함수를 반환하는 함수를 고차함수
 */

// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  // console.log(result);
  return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply);

// ...rest는 어떤 값이 넘어오는지 지정하지 않아도 객체에 담겨져있는 나머지 값들이 전부 넘어옴.

function callback(...rest) {
  let result = 0;
  // arguments로 돌릴 때 방법
  // for (i = 0; i < arguments.length; i++) {
  //   result += arguments[i];
  // }
  // return result;

  // rest로 돌릴 때 방법
  // for (i = 0; i < rest.length; i++) {
  //   result += rest[i];
  // }
  // return result;

  // map으로 돌릴 때
  rest.map((item) => {
    result += item;
  });
  return result;
}

console.log(callback(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의두배값을 다 출력하고싶음
// function iterate(max, action)

// const num = (a) => console.log("plus", a);
// const multi = (a) => console.log("multi", a * 2);
// function iterate(max, action) {
//   for (i = 0; i < max; i++) {
//     action(i);
//   }
// }
// iterate(3, num);
// iterate(3, multi);
// iterate(3, (num) => console.log(num));
// iterate(3, (multi) => console.log(multi * 2));

// let isaac = [
//   {
//     name: "아이삭",
//     age: 23,
//     home: "대덕구",
//   },
//   {
//     name: "혀언수티임자앙니임",
//     age: 34,
//     home: "세종구",
//   },
//   {
//     name: "조오오하아나아",
//     age: 26,
//     home: "유성구",
//   },
// ];

// isaac.map((item) => console.log(item));
