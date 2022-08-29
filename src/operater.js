// 🖋三項演算子

// 👻１
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

// 👻2
const num = "1300";
// console.log(num.toLocaleString());
// toLocaleString() →→ 3桁のところにコンマを入れる

// 👻3
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// typeof [変数] === "number"　→ 変数の型を判定

console.log(formattedNum);

// 👻4
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
};

console.log(checkSum(20, 81));

// 🖋論理演算子

// const flag1 = true;
// const flag2 = false;

// 一般的な解釈(△)
// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// 正しい解釈(○)
// ||は左がtrueなら左を返し、左がfalseなら右を返す
const num1 = 100;
const free = num1 || "金額未設定です";
console.log(free);

// &&は左がtrueなら右を返し、左がfalseなら左を返す
const num2 = 100;
const free2 = num2 && `${num2}円です`;
console.log(free2);

// 追加

const a = true;

// 従来(if else)
// let result = "";
// if (a) {
//   result = "10";
// } else {
//   result = "-10";
// }

// 三項演算子
const result1 = a ? 10 : -10;
console.log(result1);

// 関数で返す
function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());

// falsyとtruthy
// falsy → 真偽値に変換した際に"偽(false)"と見做される値のこと
//truety → それ以外

/*falsy一覧
 false
 0(数字)
 0n(big int)
 ""(から文字)
 null
 undifined
 NaN (Not a Number)
*/

const b = 0;
const c = "0";

console.log(Boolean(b)); //Boolean()で真偽値を確認できる
console.log(Boolean(c));

const resultA = b ? "truthy" : "falsy";
console.log(resultA);

const resultB = c ? "truthy" : "falsy";
console.log(resultB);

// 論理積(&&)
const result01 = "" && "左がfalsyなのでこっちは返らない";
const result02 = 1 && "左がtruthyなのでこっちが返る";

console.log(result01, result02);

const result05 = 1 && 1 && "truthyが続いたのでこれが返る";
const result06 = 1 && 0 && "falsyが入ったところで処理が止まるので、左の0が返る";
const result07 = 1 && "ここもtruthyなので右の0が返る" && 0;

console.log(result05, result06, result07);

// 理論和(||)
const result03 = "" || "左がfalsyなのでこっちが返る";
const result04 = "こっちがtruthyなのでこっちが返る" || 1;

console.log(result03, result04);

const result08 = 0 || "" || "truthyがあったところで返る";
const result09 =
  0 || "truthyなのでここが返る" || "左でtruthyがあったので、ここまでこない";
const result010 = 0 || "" || null; //全てfalsyの時は一番右が返る

console.log(result08, result09, result010);
