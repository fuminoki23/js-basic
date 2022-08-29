//🖋var 再代入も再定義も可能

var hoge1 = "var変数";
console.log(hoge1);

hoge1 = "再代入(var)";
console.log(hoge1);

// var hoge1 = "再定義(var)";
// console.log(hoge1);

// 🖋let 再代入は可能、再定義は不可

let hoge2 = "let変数";
console.log(hoge2);

hoge2 = "再代入(let)";
console.log(hoge2);

// let hoge2 = "再定義(let)" 不可

// 🖋const 再代入、再定義ともに不可

const hoge3 = "const変数";
console.log(hoge3);

// hoge3 = "再代入(const)" 不可

// const hoge3 = "再定義(var)"; 不可

//🖋constで定義したオブジェクトはプロパティの変更が可能
const hoge4 = {
  name: "山田",
  age: 23
};

hoge4.name = "鈴木";
hoge4.address = "Osaka";

console.log(hoge4);

//🖋変数の値も変更が可能
const hoge5 = ["dog", "cat"];
hoge5[0] = "bird";
hoge5.push("monkey");

console.log(hoge5);
