// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }
  // 접근시 get 으로,
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  // 할당시 set 으로 들어감
  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("수지", "김");
student.firstName = "안나";
console.log(student.firstName);
console.log(student.fullName); // => get

student.fullName = "김철수"; // => set
