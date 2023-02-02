//  typeof : 데이터 타입을 확인
//  값을 타입 문자열로 반환

let variable;
console.log(typeof variable);

variable = "";
console.log(typeof variable);

variable = 12314; // <- 할당된 값에 따라 타입이 결정된다.
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof "123");

// Java Script dynamic, weakly typed programming language
// 자바스크립트는 동적으로 타입이 결정되고,  weakly typed -> 한번 타입이 정해져도 다시 어떤 값을 할당하냐에 따라 타입이 결정된다.
