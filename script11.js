/*
Execute in terminal:

node script11.js

*/

var fs = require('fs');

console.log('Executed before file writing.');

// fs.writeFile('./files/file2', 'new line!', 'utf8', function(error){
//     if(error) throw error;
//     console.log('file written');
// });

var data = fs.writeFileSync('./files/file3', 'new line!', 'utf8');
console.log('file written');

console.log('Executed after file writing, probably.');
