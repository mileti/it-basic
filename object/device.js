//演習
class Device{
    //コンストラクタ
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;

        if (this.name == null){   //デフォルト値
            this.name = 'デフォルト';
        }
        if (this.energy == null){
            this.energy = 10;
        }
    }
    // name;
    // energy;

    confirm() {
        console.log('名前: '+ this.name + ', 現在のエネルギー: ' + this.energy);
        // console.log(`名前: ${this.name} , 現在のエネルギー:  ${this.energy}`);
    }

    move(){
        if (this.energy > 0 ){
            this.energy = this.energy - 1;
            console.log('動作しました。残りエネルギー：' + this.energy);
        }else{
            console.log('エネルギーが足りなかったので、動作しませんでした。');
        }
    }

}

// const device = new Device();
// device.name = 'デバイス1';
// device.energy = 10;
// device.confirm();


// device.name = 'デバイス2';
// device.energy = 3;
// device.confirm();

// for(let i=1 ; i <= 4 ; i++){
//     device.move();
// }
// let i=0;
// while(i <=4){
//     device.move();
//     i++
// }
// device.confirm();




//演習4
const defaultDevice = new Device('でばいす');
const device = new Device('デバイス4', 7);

defaultDevice.confirm();
device.confirm();