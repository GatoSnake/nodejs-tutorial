/*
Execute in terminal:

npm install -g nodemon
node script22.js

*/

var express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.end('Wow, my name is Cristhian');
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
