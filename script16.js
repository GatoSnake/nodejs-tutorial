/*
Execute in terminal:

node script16.js

*/

var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', (request, response) => {
    response.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
