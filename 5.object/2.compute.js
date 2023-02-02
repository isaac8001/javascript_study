const obj = {
  name: "이삭",
  age: 29,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "age"));

function addkey(obj, key, value) {
  obj[key] = value;
}
addkey(obj, "job", "engineer");
console.log(obj);

function deletekey(obj, key) {
  delete obj[key];
}
deletekey(obj, "job");
console.log(obj);

// 참고사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects
