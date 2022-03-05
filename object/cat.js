//クラス
class Cat{
    //コンストラクタ
    constructor(name) {
        this.name = name
    }

    //name;

    purr(){
        console.log(this.name + 'が鳴く');
    }

    sleep() {
        console.log(this.name + 'は眠る');
    }
}

module.exports = Cat;


// //利用する処理
// //インスタンス化

// const mike = new Cat();
// // mike.name = 'ミケ';
// const taro = new Cat('タロウ');
// mike.purr();
// mike.sleep();
// taro.purr();
// taro.sleep();

// // const sansho = taro;
// // taro.purr();
// // sansho.purr();

// // taro.name = 'ジロウ';
// // taro.purr();
// // sansho.purr();


