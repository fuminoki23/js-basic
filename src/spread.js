// スプレッド構文

// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);

// 従来
sumFunc(arr1[0], arr1[1]);
// スプレッド構文
sumFunc(...arr1);

// まとめるスプレッド構文
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...els] = arr2;

console.log(num1);
console.log(num2);
console.log(els);

// 配列のコピー、結合
const arr3 = [10, 20];
const arr4 = [30, 40];

const arr5 = [...arr3];
const arr6 = [...arr4];
console.log(arr5);
console.log(arr6);

const arr7 = [...arr3, ...arr4];
console.log(arr7);

// イコール(=)でコピーすることもできるが、配列に変更を加えると元の配列まで変わるため注意
// const arr8 = arr3
// arr8[0] = 100
// console.log(arr8)
// console.log(arr3)

// スプレッド構文の変更でコピーしたものは、元まで変わらない
const arr9 = [...arr3];
arr9[0] = 100;
console.log(arr9);
console.log(arr3);

// 追加

// 配列を関数に渡す
const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums); //Math.max → 最大値を返す
console.log(result);

//配列のコピー
let arr10 = [1, 2, 3];
let arr11 = [4, 5, 6];

let newArr10 = arr10; //arr10を代入
console.log(arr10 === newArr10); //true
newArr10.push(4);
console.log(arr10, newArr10); //newArr1を変えるとarr1まで変わる

let newArr2 = [...arr1]; //arr1をコピー
console.log(arr1 === newArr2); //false
newArr2.push(5);
console.log(arr1, newArr2); //newArr2を変えてもarr1は変わらない

// 配列の結合と追加
let newArr3 = [...arr10, 10, 11, ...arr11, 12];
console.log(newArr3);

// オブジェクトのコピー
const obj = {
  name: "Tom",
  age: 22
};
const newObj = { ...obj };
newObj.name = "John";
console.log(newObj, obj);

//レストパラメーター(引数の個数が決まっていないとき)
const restA = (...argA) => {
  console.log(argA); //渡ってきた数を配列に
  argA.map((arg) => console.log(arg)); //mapで一つずつ取り出す
};
restA(1, 2, 3, 5, 6);

const restB = (n, ...argB) => console.log(n, argB);
restB(1, 2, 4, 5, 6);
