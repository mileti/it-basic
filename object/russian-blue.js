const Cat = require('./cat');

class RussianBlue extends Cat{

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

}

module.exports = RussianBlue;