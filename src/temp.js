// 🖋テンプレート文字列

const name = "山田";
const age = 23;

// 私は山田、23歳です。

// 従来
const message1 = "私は" + name + "、" + age + "歳です。";
console.log(message1);

// テンプレート文字列
const message2 = `私は${name}、${age}歳です。`;
console.log(message2);
