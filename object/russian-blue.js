const Cat = require('./cat');

class RussianBlue extends Cat{

    constructor(name, weight){
        //親クラスのコンストラクタの呼び出し
        super(name);  //←先に呼び出す
        this.weight = weight;  //新しいのを書く
    }





    //override
    purr(){
        console.log('親クラスのpurr');
        super.purr();
        console.log('以下新しい処理');
        console.log(this.name + 'がニャーと鳴く');
    }

    //新しいメソッド
    scratch(){
        console.log(this.name + 'が引っ掻く');
    }

    showStatus(){
        console.log('体重 :'+this.weight);
    }

}

module.exports = RussianBlue;