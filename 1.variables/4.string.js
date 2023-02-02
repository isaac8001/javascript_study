// 문자열타입

let string = "안녕하세요";
string = "안녕!";
console.log(string);

// 특수 문자출력하는법

string = "안녕!\n 이삭아! \t\t 내 이름은\\\u09AC ";
console.log(string);

// 템플릿 리터널(Template Literal)
let id = "이삭";
let greetings = "안녕, " + id + "🖐\n즐거운 하루 보내요!";
console.log(greetings);

greetings = `안녕, ${id} 🖐
즐거운하루 보내요!`;
console.log(greetings);
