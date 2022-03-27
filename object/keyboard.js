const Device = require('./device');

class Keyboard extends Device{

    move(){
        if (this.energy > 0 ){
            this.energy = this.energy - 1;
            console.log('文字を入力しました。残りエネルギー：' + this.energy);
        }else{
            super.move();
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
}

module.exports = Keyboard;

