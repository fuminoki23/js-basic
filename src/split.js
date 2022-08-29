// 分割代入

// 🖋オブジェクト
const myProfile = {
  name: "山田",
  age: 23
};

// 従来
const message1 = `私は${myProfile.name}、${myProfile.age}歳`;
console.log(message1);

// 分割代入
const { name, age } = myProfile;
const message2 = `私は${name}、${age}歳なのだ`;
console.log(message2);

// 🖋配列
// 従来
const myProfileArr = ["山田", 23];
const message3 = `私は${myProfileArr[0]},${myProfileArr[1]}ですわ。`;
console.log(message3);

// 分割代入
const [nameArr, ageArr] = myProfileArr;
const message4 = `私は${nameArr},${ageArr}だす。`;
console.log(message4);

//🖋追加

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAdress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// 通常(配列)
const fnArr = (array) => {
  console.log("---配列---");
  console.log(`country: ${arr[0]}`);
  console.log(`state: ${arr[1]}`);
  console.log(`city: ${arr[2]}`);
};
fnArr(arr);

// 分割代入
const fnArr２ = (array) => {
  const [a, b, c] = array;
  console.log("---配列---");
  console.log(`country: ${a}`);
  console.log(`state: ${b}`);
  console.log(`city: ${c}`);
};
fnArr２(arr);

//さらにまとめる
const fnArr3 = ([a, b, c]) => {
  console.log("---配列---");
  console.log(`country: ${a}`);
  console.log(`state: ${b}`);
  console.log(`city: ${c}`);
};
fnArr3(arr);

//通常(オブジェクト)
const fnObjAdress = (obj) => {
  console.log("---オブジェクト---");
  console.log(`country: ${obj.country}`);
  console.log(`country: ${obj.state}`);
  console.log(`country: ${obj.city}`);
};
fnObjAdress(objAdress);

// 分割
const fnObjAdress2 = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`country: ${state}`);
  console.log(`country: ${city}`);
};
fnObjAdress2(objAdress);

//これも可
const fnObjAdress3 = (obj) => {
  const { country, state, city } = obj;
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`country: ${state}`);
  console.log(`country: ${city}`);
};
fnObjAdress3(objAdress);
