const util = require('./util');
const Kahoot = require('./kahoot');

let args = process.argv.slice(2);
if(args.length < 2) {
  console.error('you must provide Kahoot-PIN and number of bots')
  process.exit();
}
let pin = args[0];
let numberBots = parseInt(args[1]);
for (let n = 0; n < numberBots; n++) {
  kahoot = new Kahoot(pin, 'Albert' + n);
  kahoot.join();    
}

