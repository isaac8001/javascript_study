// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   ejat() {
//     console.log('먹쟈')
//   }
//   sleep(){
//     console.log('잔다')
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   ejat() {
//     console.log('먹쟈')
//   }
//   sleep(){
//     console.log('잔다')
//   }
//   play() {
//     console.log('놀쟈')
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    // 상속을 받았다고 해도 constructor를 쓰는 순간 필요한 input 데이터를 써줘야 한다.
    // super = 내가 상속하고 있는 부모 class의 constructor를 가리키는 것이다.
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀쟈잉~!");
  }
  // 오버라이딩 overriding => 부모 클래스에 있는 것을 덮어 씌우는 방법
  eat() {
    // 부모가 가지고 있는 함수를 호출하는 방법
    super.eat();
    console.log("갱아지가 먹는다!");
  }
}
const dog = new Dog("뻘건색", "개삭");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
