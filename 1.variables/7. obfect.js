/**
 * 원시타입 객체는 값 자체가 메모리 셀에 저장됨.
 *
 * 객체는 heap 이라는 곳에 저장 되고, 변수명이 객체를 담고 있는 heap의 주소를 가리킨다. 가리킨 주소를 따라가 보면 메모리셀에 저장된 객체가 있음.
 *
 * 복합 데이터
 * {id : 1234,
 * key : 'secret-key }
 *
 *
 */

let name = "apple";
let color = "red";
let dispaly = "🍎";

let orange = {
  name: "오렌지",
  color: "orange",
  dispaly: "🍊",
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.dispaly);
