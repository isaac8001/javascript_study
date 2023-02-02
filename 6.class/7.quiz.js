// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Money {
  constructor(name, team, time) {
    this.name = name;
    this.team = team;
    this.time = time;
    if (team == "인턴" || team == "") {
      // 인턴의 한달 근무시간과 월급 계산
      this.partTime();
    } else {
      // 정직원의 한달 근무시간과 받는 월급 계산
      this.allTime();
    }
  }

  partTime() {
    console.log("인턴 or 파트타임 월급여입니다.");
    console.log(
      `이름 : ${this.name}\n소속 : ${this.team}\n근무시간(1일 기준) : ${
        this.time
      }시간\n월급 : ${this.time * 0.8 * 20} 만원`
    );
  }

  allTime() {
    console.log("정직원 월급입니다.");
    console.log(
      `이름 : ${this.name}\n소속 : ${this.team}\n근무시간(1일 기준) : ${
        this.time
      }시간\n월급 : ${this.time * 1 * 20} 만원`
    );
  }
}

// const isaac = new Money("유이삭", "FE개발팀", 10);
const isaac = new Money("조하나", "FE개발팀", 7);
// const jungho = new Money("김정호", "인턴", 8);

////////////////////////////////////////////////////////////////////////////

// 엘리가한 코드
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee("엘리", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
