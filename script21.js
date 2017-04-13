/*
Execute in terminal:

npm install body-parser
node script21.js

*/

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.get('/', (request, response) => {
    response.cookie('myFirstCookie', 'Looks Good');
    response.end('Wow');
});

app.get('/removeCookie', (request, response) => {
    response.clearCookie('myFirstCookie');
    response.end('Wow');
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
