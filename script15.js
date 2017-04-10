/*
Execute in terminal:

node script15.js

*/

var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/helloThere', (request, response) => {
    response.send('Hello there, from express!');
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
