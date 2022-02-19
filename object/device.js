//演習
class Device{
    //コンストラクタ
    constructor() {}
    name;
    energy;

    confirm() {
        console.log('名前: '+ this.name + ', 現在のエネルギー: ' + this.energy);
        console.log(`名前: ${this.name} , 現在のエネルギー:  ${this.energy}`);
    }
}

const device = new Device();
device.name = 'デバイス1';
device.energy = 10;
device.confirm();