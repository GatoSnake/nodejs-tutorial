/*
Execute in terminal:

nodemon script24.js

*/

var express = require('express');
var app = express();
var router = express.Router();

app.use('/users', router);

router.get('/:username(\\w+)', (request, response) => {
    response.end(JSON.stringify(request.params));
});

router.get('/heyThereFirstRouteAgain', (request, response) => {
    response.end('What is going on, this is a bit different!');
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
