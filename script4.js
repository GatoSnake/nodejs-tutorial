/*
Execute in terminal:

node script4.js

*/

var server = require('http');

server.createServer(engine).listen('1337');

function engine(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Blablabla': 'from codedamn.com'
    });

    response.end('Hey there, from the server! :D');
}
