/*
Execute in terminal:

node script17.js

*/

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', (request, response) => {
    response.sendFile('index.html', {
        root: path.join(__dirname, './files')
    });
});

app.get(/^(.+)$/, (request, response) => {
    console.log(request.params);
    try {
        if (fs.statSync(path.join(__dirname, './files', `${request.params[0]}.html`)).isFile()) {
            response.sendFile(`${request.params[0]}.html`, {
                root: path.join(__dirname, './files')
            });
        }
    } catch (e) {
        console.log(e);
        response.sendFile('404.html', {
            root: path.join(__dirname, './files')
        });
    }
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
