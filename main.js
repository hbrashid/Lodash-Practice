'use strict';


var _ = require('lodash')
let array = [1,2,3,4,5,6]

console.log(_.chunk(array, [2]));

console.log(_.reverse(array));

console.log(_.without(array, 1, 2));

console.log(_.shuffle(array));