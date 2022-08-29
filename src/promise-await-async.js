//🖋非同期処理

// Promise
let a = 0;

console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);

    const err = "エラー処理";
    reject(err);
  }, 2000);
})
  .then((b) => {
    console.log(b, "thenが実行(resolveの引数aが渡ってきた)");
    return b;
  })
  .then((c) => {
    console.log(
      c,
      "チェーンメソッド1 最初のthenのreturnで返した値が渡ってきた"
    );
    return c;
  })
  .then((d) =>
    console.log(
      d,
      "チェーンメソッド2 ２番目のthenのreturnで返した値が渡ってきた"
    )
  )
  .catch((e) => {
    console.log(e, "catchが実行(rejectの引数errが渡ってきた)");
  });

//🖋asyncとawait

let f = 0;

async function init１() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      f = 1;
      resolve(f);
    }, 2000);
  });
  console.log(f);
}
init１();

// 変数の設定
async function init2() {
  // 変数を設定すると、resolveの値fを取得できる
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      f = 2;
      resolve(f);
    }, 2000);
  });
  console.log(result);
}
init2();

// try&catch(エラー処理)
async function init3() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        f = 3;
        resolve(f);
        const err = "エラー処理";
        reject(err);
      }, 2000);
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
init3();
