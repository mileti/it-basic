const Cat = require('./cat');

class Persia extends Cat {

    // override
    purr(){
        console.log(this.name + 'がニャニャンと鳴く');
    }
}

module.exports = Persia;