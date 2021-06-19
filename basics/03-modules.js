// Moduls
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-firstModuls')
const sayHi = require('./05-utils')
const alternativeName = require('./06-alternative-flavor')
console.log(alternativeName)

require('./07-MindGrenade')

sayHi('Mahdi')
sayHi(names.peter)
sayHi(names.john)
sayHi('bob')
