/*
Execute in terminal:

npm install express-session
node script25.js

*/

var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(sessions({
    secret: 'asdasdasd123123123',
    resave: false,
    saveUninitialized: true
}));

app.get('/login', (request, response) => {
    session = request.session;
    if (session.uniqueID) {
        response.redirect('/redirects');
    }
    response.sendFile('./files/login.html', {
        root: __dirname
    });
});

app.post('/login', (request, response) => {
    //response.end(JSON.stringify(request.body));
    session = request.session;
    if (session.uniqueID) {
        response.redirect('/redirects');
    }
    if (request.body.username === 'admin' && request.body.password === 'admin') {
        session.uniqueID = request.body.username;
    }
    response.redirect('/redirects');
});

app.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect('/login');
});

app.get('/redirects', (request, response) => {
    session = request.session;
    if (session.uniqueID) {
        console.log(session.uniqueID);
        response.redirect('admin');
    } else {
        response.end('Who are you?? <a href="/logout">KILL SESSION</a>');
    }
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
