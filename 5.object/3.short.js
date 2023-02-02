const x = 0;
const y = 0;
const coordinate = { x, y }; // <= { x: x, y: y } 이렇게 쓰지 않고 생략해서 쓸 수 있다.
console.log(coordinate);

// 이렇게 깔끔하게도 만들 수 있음. 왜냐면 key 값과 value 값의 이름이 동일하기 때문에
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
makeObj("isaac", 28);
