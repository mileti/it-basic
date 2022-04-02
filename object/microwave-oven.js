const Device = require('./device');

class MicrowaveOven extends Device{

    move(){
        // if (this.energy > 0 ){
        //     this.energy = this.energy - 1;
        //     console.log('動作しました。残りエネルギー：' + this.energy);
        //     console.log('温め中');
        // }else{
        //     console.log('エネルギーが足りなかったので、動作しませんでした。');
        // }

        super.move();
        if (this.energy > 0 ){
            console.log('温め中');
        }


    }

    warm(seconds){
        // console.log(seconds);

        for (let i=1; i<=seconds; i++){
            console.log( i +'秒経過');
            this.move();
        }
    }
}


module.exports = MicrowaveOven;

