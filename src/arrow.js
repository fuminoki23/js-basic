// ðã¢ã­ã¼é¢æ°

// å¾æ¥ã®é¢æ°
function func1(str) {
  return str;
}
console.log(func1("func1ã§ã"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2ã§ã"));

// ã¢ã­ã¼é¢æ°
const func3 = (str) => {
  return str;
};
console.log(func3("func3ã§ã"));

// å¼æ°ãä¸ã¤ã®å ´å()ã¯çç¥å¯ãè¿ãå¦çãä¸è¡ã®å ´åã()ã¨returnã®çç¥ãå¯
const func4 = (str) => str;
console.log(func4("func4ã§ã"));

const func5 = (num1, num2) => num1 + num2;
console.log(func5(2, 3));
