// app.js

const _ = require('lodash');
const math = require('./math');

// Using your custom module
const sum = math.add(10, 15);
const product = math.multiply(4, 5);

// Using lodash utility (e.g., summing an array)
const arraySum = _.sum([1, 2, 3, 4, 5]);

console.log('Custom Add:', sum);              // 25
console.log('Custom Multiply:', product);     // 20
console.log('Lodash Array Sum:', arraySum);   // 15
