const Device = require('./device');

class Keyboard extends Device{

    constructor(name, energy, arrangement){
        super(name, energy);
        this.arrangement = arrangement;
    }
    move(){
        if (this.energy > 0 ){
            this.energy = this.energy - 1;
            console.log('文字を入力しました。残りエネルギー：' + this.energy);
        }else{
            console.log('エネルギーが足りなかったので、動作しませんでした。');
        }
    }

    enter(){
        if (this.energy > 0 ){
            this.energy = this.energy - 1;
            console.log('入力情報を確定しました。残りエネルギー：' + this.energy);
        }else{
            console.log('エネルギーが足りなかったので、動作しませんでした。');
        }
    }

    showArrangement(){
        console.log('キーボード配列:' + this.arrangement);
    }

    
}

module.exports = Keyboard;

