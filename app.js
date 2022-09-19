/*const amount = 12;

if(amount < 10) {
    console.log('small number');
} else {
    console.log('large number');
}

console.log('hey it\'s my first node app!!!');*/

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind-grenade')
console.log(data)
console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const osData = require('./8-os-module')
const pathData = require('./9-path-module')

const _ =  require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);




