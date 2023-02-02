// 산술 연산자 (Arithmetic operators)
console.log(5 + 2);
console.log(5 - 2);
console.log(5 / 2);
console.log(5 % 2);
// 둘다 거듭 제곱을 할 수 있음.
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2));

// + 연산자 주의점!
let text = "두개의" + "문자를";
console.log(text);
text = "1" + 1; // 숫자와 문자열을 더하면 문자열로변환됨
console.log(text);
