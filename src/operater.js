// ðä¸é æ¼ç®å­

// ð»ï¼
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

// ð»2
const num = "1300";
// console.log(num.toLocaleString());
// toLocaleString() ââ 3æ¡ã®ã¨ããã«ã³ã³ããå¥ãã

// ð»3
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "æ°å¤ãå¥åãã¦ãã ãã";
// typeof [å¤æ°] === "number"ãâ å¤æ°ã®åãå¤å®

console.log(formattedNum);

// ð»4
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100ãè¶ãã¦ãã¾ã" : "è¨±å®¹ç¯å²ã§ã";
};

console.log(checkSum(20, 81));

// ðè«çæ¼ç®å­

// const flag1 = true;
// const flag2 = false;

// ä¸è¬çãªè§£é(â³)
// if (flag1 || flag2) {
//   console.log("1ã2ã¯true");
// }
// if (flag1 && flag2) {
//   console.log("1ã2ãtrue");
// }

// æ­£ããè§£é(â)
// ||ã¯å·¦ãtrueãªãå·¦ãè¿ããå·¦ãfalseãªãå³ãè¿ã
const num1 = 100;
const free = num1 || "éé¡æªè¨­å®ã§ã";
console.log(free);

// &&ã¯å·¦ãtrueãªãå³ãè¿ããå·¦ãfalseãªãå·¦ãè¿ã
const num2 = 100;
const free2 = num2 && `${num2}åã§ã`;
console.log(free2);

// è¿½å 

const a = true;

// å¾æ¥(if else)
// let result = "";
// if (a) {
//   result = "10";
// } else {
//   result = "-10";
// }

// ä¸é æ¼ç®å­
const result1 = a ? 10 : -10;
console.log(result1);

// é¢æ°ã§è¿ã
function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());

// falsyã¨truthy
// falsy â çå½å¤ã«å¤æããéã«"å½(false)"ã¨è¦åãããå¤ã®ãã¨
//truety â ããä»¥å¤

/*falsyä¸è¦§
 false
 0(æ°å­)
 0n(big int)
 ""(ããæå­)
 null
 undifined
 NaN (Not a Number)
*/

const b = 0;
const c = "0";

console.log(Boolean(b)); //Boolean()ã§çå½å¤ãç¢ºèªã§ãã
console.log(Boolean(c));

const resultA = b ? "truthy" : "falsy";
console.log(resultA);

const resultB = c ? "truthy" : "falsy";
console.log(resultB);

// è«çç©(&&)
const result01 = "" && "å·¦ãfalsyãªã®ã§ãã£ã¡ã¯è¿ããªã";
const result02 = 1 && "å·¦ãtruthyãªã®ã§ãã£ã¡ãè¿ã";

console.log(result01, result02);

const result05 = 1 && 1 && "truthyãç¶ããã®ã§ãããè¿ã";
const result06 = 1 && 0 && "falsyãå¥ã£ãã¨ããã§å¦çãæ­¢ã¾ãã®ã§ãå·¦ã®0ãè¿ã";
const result07 = 1 && "ãããtruthyãªã®ã§å³ã®0ãè¿ã" && 0;

console.log(result05, result06, result07);

// çè«å(||)
const result03 = "" || "å·¦ãfalsyãªã®ã§ãã£ã¡ãè¿ã";
const result04 = "ãã£ã¡ãtruthyãªã®ã§ãã£ã¡ãè¿ã" || 1;

console.log(result03, result04);

const result08 = 0 || "" || "truthyããã£ãã¨ããã§è¿ã";
const result09 =
  0 || "truthyãªã®ã§ãããè¿ã" || "å·¦ã§truthyããã£ãã®ã§ãããã¾ã§ããªã";
const result010 = 0 || "" || null; //å¨ã¦falsyã®æã¯ä¸çªå³ãè¿ã

console.log(result08, result09, result010);

//è¿½è¨  nullåæ¼ç®å­"??"
// A ?? B
// Aãnullã¾ãã¯undifinedã®æã«Bãè¿ãã
