const Cat = require('./cat');

//利用する処理
//インスタンス化

const mike = new Cat();
// mike.name = 'ミケ';
const taro = new Cat('タロウ');
// mike.purr();
// mike.sleep();
// taro.purr();
// taro.sleep();

// const sansho = taro;
// taro.purr();
// sansho.purr();

// taro.name = 'ジロウ';
// taro.purr();
// sansho.purr();



// const RussianBlue = require('./russian-blue');

// const blue = new RussianBlue('ブルー',15);
// // １. overrideしたメソッド
// blue.purr();
// // ２. 親クラス（スーパークラス）のメソッド
// blue.sleep();
// // ２. RussianBlueで新規に追加したメソッド
// blue.scratch();
// blue.showStatus();

const RussianBlue = require('./russian-blue');
const Persia = require('./persia');

const catArray = [];
const blue = new RussianBlue('ブルー', 15);
const persia = new Persia('ペル');

catArray.push(blue);
catArray.push(persia);

for(let i = 0; i < catArray.length; i++){
    catArray[i].purr();
}