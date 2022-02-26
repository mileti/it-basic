//演習
class Device{
    //コンストラクタ
    constructor() {}
    name;
    energy;

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


const device = new Device();
device.name = 'デバイス2';
device.energy = 3;
device.confirm();


for(let i=1 ; i <= 4 ; i++){
    device.move();
}


device.confirm();
