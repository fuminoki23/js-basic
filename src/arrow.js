// 🖋アロー関数

// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

// 引数が一つの場合()は省略可。返す処理が一行の場合、()とreturnの省略も可
const func4 = (str) => str;
console.log(func4("func4です"));

const func5 = (num1, num2) => num1 + num2;
console.log(func5(2, 3));
