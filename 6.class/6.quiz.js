// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #value;
  constructor(start) {
    this.start = start;
    if (isNaN(start) || start < 0) {
      this.#value = 0;
    } else {
      this.#value = start;
    }
  }
  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const number = new Counter(0);
number.increment(); // 1
number.increment(); // 2
number.increment(); // 2
console.log(number.value);
