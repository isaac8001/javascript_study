// 객체 object
// 서로 연관있는 속성과 행동을 묶어 주기 위해
// 객체 안에 가지고 있는 '값'을 "속성(Property)"이라 부르고,
// 객체 안에 가지고 있는 'function(함수)'을 "행동(Method)"라고 부름
// !!!밀접하게 관련 있는 상태와 행동을 객체로 묶어야 함!!!

// object literal{ key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: "apple",
  "hello-bye": "🖐",
  0: 1,
  ["hello-bye1"]: "🖐",
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye1"]); // 대괄호 표기법 bracket notation
console.log(apple["name"]);

// 속성 추가
apple.id = "isaac yu";
console.log(apple.id);
console.log(apple["id"]);

// 속성 삭제
delete apple.id;
console.log(apple);
