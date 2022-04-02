// const Keyboard = require('./keyboard');

// const keyboard = new Keyboard('logicool',5);
// keyboard.confirm();
// keyboard.move();
// keyboard.enter();
// keyboard.confirm();

const MicrowaveOven = require('./microwave-oven');
 
const microwaveOven = new MicrowaveOven('panasonic', 5);
microwaveOven.confirm();
microwaveOven.move();
microwaveOven.warm(5);
microwaveOven.confirm();