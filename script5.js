/*
Execute in terminal:

node script5.js

*/

var http = require('http');

var server = http.createServer(engine);
server.listen('1337', () => {
    console.log('Server was hit by a request');
});

function engine(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Blablabla': 'from codedamn.com'
    });

    response.end(`Hey there, from the server! :D. Request from page: ${request.url}`);
}
