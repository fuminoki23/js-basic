// åå²ä»£å¥

// ðãªãã¸ã§ã¯ã
const myProfile = {
  name: "å±±ç°",
  age: 23
};

// å¾æ¥
const message1 = `ç§ã¯${myProfile.name}ã${myProfile.age}æ­³`;
console.log(message1);

// åå²ä»£å¥
const { name, age } = myProfile;
const message2 = `ç§ã¯${name}ã${age}æ­³ãªã®ã `;
console.log(message2);

// ðéå
// å¾æ¥
const myProfileArr = ["å±±ç°", 23];
const message3 = `ç§ã¯${myProfileArr[0]},${myProfileArr[1]}ã§ããã`;
console.log(message3);

// åå²ä»£å¥
const [nameArr, ageArr] = myProfileArr;
const message4 = `ç§ã¯${nameArr},${ageArr}ã ãã`;
console.log(message4);

//ðè¿½å 

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAdress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// éå¸¸(éå)
const fnArr = (array) => {
  console.log("---éå---");
  console.log(`country: ${arr[0]}`);
  console.log(`state: ${arr[1]}`);
  console.log(`city: ${arr[2]}`);
};
fnArr(arr);

// åå²ä»£å¥
const fnArrï¼ = (array) => {
  const [a, b, c] = array;
  console.log("---éå---");
  console.log(`country: ${a}`);
  console.log(`state: ${b}`);
  console.log(`city: ${c}`);
};
fnArrï¼(arr);

//ããã«ã¾ã¨ãã
const fnArr3 = ([a, b, c]) => {
  console.log("---éå---");
  console.log(`country: ${a}`);
  console.log(`state: ${b}`);
  console.log(`city: ${c}`);
};
fnArr3(arr);

//éå¸¸(ãªãã¸ã§ã¯ã)
const fnObjAdress = (obj) => {
  console.log("---ãªãã¸ã§ã¯ã---");
  console.log(`country: ${obj.country}`);
  console.log(`country: ${obj.state}`);
  console.log(`country: ${obj.city}`);
};
fnObjAdress(objAdress);

// åå²
const fnObjAdress2 = ({ country, state, city }) => {
  console.log("---ãªãã¸ã§ã¯ã---");
  console.log(`country: ${country}`);
  console.log(`country: ${state}`);
  console.log(`country: ${city}`);
};
fnObjAdress2(objAdress);

//ãããå¯
const fnObjAdress3 = (obj) => {
  const { country, state, city } = obj;
  console.log("---ãªãã¸ã§ã¯ã---");
  console.log(`country: ${country}`);
  console.log(`country: ${state}`);
  console.log(`country: ${city}`);
};
fnObjAdress3(objAdress);
