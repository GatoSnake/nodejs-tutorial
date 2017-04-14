/*
Execute in terminal:

nodemon script23.js

*/

var express = require('express');
var app = express();
var router = express.Router();

app.use('/myFirstRoute', router);

router.get('/heyThereFirstRoute', (request, response) => {
    response.end('What is going on!');
});

router.get('/heyThereFirstRouteAgain', (request, response) => {
    response.end('What is going on, this is a bit different!');
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
