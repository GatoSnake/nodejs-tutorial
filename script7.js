/*
Execute in terminal:

node script7.js

*/

var response = require('./methods2');

console.log(response);
console.log(`sumNumbers(1,2) = `,response.data.sumNumbers(1,2));
