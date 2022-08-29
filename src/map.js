// // mapやfilterを使った配列の処理

// 🖋map
const nameArr = ["山田", "田中", "中村"];

// for文
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}`);
}

// map
nameArr.map((name) => console.log(name));

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// mapで新しい配列を作る
const nameArr2 = nameArr.map((name) => {
  return `${name}様`;
});
console.log(nameArr2);

// 👻
const newNameArr = nameArr.map((name) => {
  if (name === "山田") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// 🖋filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// 🖋filterとmap

const arr = [10, 20, 30, 40];

// for
const Arr2 = [];
for (let i = 0; i < arr.length; i++) {
  const val = arr[i] * 2;
  if (val > 50) {
    Arr2.push(val);
  }
}
console.log(Arr2);

//map
const Arr3 = arr.map((val) => val * 2);
const Arr4 = Arr3.filter((val) => val > 50);
console.log(Arr4);

//mapとfilterを一つにまとめる
const Arr5 = arr.map((val) => val * 2).filter((val) => val > 50);
console.log(Arr5);
