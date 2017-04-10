/*
Execute in terminal:

node script14.js

*/

var express = require('express');
var app = express();

app.get('/helloThere', (request, response) => {
    response.send('Hello there, from express!');
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
