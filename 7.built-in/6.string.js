const textOBJ = new String("Hello World!");
const text = "Hello World!";
console.log(textOBJ);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));

console.log(text.includes("tx"));
console.log(text.includes("h"));
console.log(text.includes("H"));

console.log(text.startsWith("He")); // 이거로 시작하는지 아닌지
console.log(text.endsWith("!")); // 이거로 끝나는지 아닌지

console.log(text.toUpperCase()); // 대문자
console.log(text.toLowerCase()); // 소문자

console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = "            space           ";
console.log(space.trim());

const longText = "Get to the point";
console.log(longText.split(" ")); // 배열로 반환
console.log(longText.split(" ", 2));
