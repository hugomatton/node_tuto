// Common Js --> every file is module by default
// Modules --> Encapsuled code (only share minimum)

const { john, peter } = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
require('./7-mind-grenade')//importer des modules peut suffire a executer des fonctions écrite dans ce dernier

console.log(data)
sayHi(john)
sayHi(peter)
sayHi('susan')