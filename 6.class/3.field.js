// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  // 인스턴스 레벨의 메서드
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//apple.#name = "오렌지"; // #field는 외부에서 접근이 불가능함
console.log(apple);

// #을 붙이면 외부에서 접근이 불가능함.
// #을 붙이면 외부에서 접근이 불가능하기 때문에 수정도 class 차원에서만 가능
// 위 오렌지처럼 이름을 바꾸려고 해도 Private field '#name' must be declared in an enclosing class 라는 오류와 함께 수정 불가
