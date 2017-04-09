/*
Execute in terminal:

node script3.js

*/

var response = require('./methods.js');

console.log(response);
console.log(`sumNumbers(1,2) = `,response.data.sumNumbers(1,2));
