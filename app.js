//CommonJS, every file is module (by default)
//Modules - encapsulated code (only share minimum)
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const { items, singlePerson } = require('./6-alternative-flavour');
require('./7-mind-grenade')
console.log(singlePerson)
console.log(items)

// sayHi('susan');
// sayHi(john);
// sayHi(peter);