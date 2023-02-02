// 동등 비교 관계 연산자 (Equality operators)

// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 둘다 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == "2"); // 왜 true? 문자가 숫자로 자동으로 변환이 되어서 비교가 되기 때문이다. 타입은 다르지만 값이 똑같기 때문! 그래서 타입스크립트쓰는듯?
console.log(2 === "2"); // 여기는 false 값과 타입까지 다 같아야하니까능
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: "js",
};
const obj2 = {
  name: "js",
};
console.log(obj1 == obj2); // 메모리 주소가 다르기 때문에!!! false
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
