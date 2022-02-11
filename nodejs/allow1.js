//アロー関数

const fun1 = function(a){
    return a*a;
}
console.log('fun1');
console.log(fun1(2));
console.log('---------');


const allow1 = (a) => {
    return a*a;
}

console.log('allow1');
console.log(allow1(2));
console.log('---------');

  // 1、処理が複数なければ（一行だけなら）、「{}」と「return」を削除できる。
  // 戻り値は処理結果
const allow2 = (a) => a*a;

console.log('allow2');
console.log(allow2(2));
console.log('---------');

   // 2、引数が一つだけなら、「()」を削除できる。
   // 戻り値は処理結果
const allow3 = a => a*a;

console.log('allow3');
console.log(allow3(2));
console.log('---------');