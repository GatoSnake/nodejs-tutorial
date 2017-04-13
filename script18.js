/*
Execute in terminal:

node script18.js

*/

var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', (request, response) => {
    var text = `Hello ${request.query.firstName}`;
    response.end(text);
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
