// 사용예제 1
function add(a, b) {
  console.log("function");
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용예제 2
let lastName = "김";
let firstName = "지수";
fullName(firstName, lastName);

let lastName2 = "박";
let firstName2 = "철수";
fullName(firstName2, lastName2);

function fullName(firstName, lastName) {
  console.log(firstName + lastName);
  return firstName + lastName;
}
