/*
Execute in terminal:

npm install body-parser
node script19.js

*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', (request, response) => {
    response.sendFile('index.html', {
        root: path.join(__dirname, './files')
    });
});

app.post('/', (request, response) => {
    response.end(JSON.stringify(request.body));
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
