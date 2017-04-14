/*
Execute in terminal:

npm install express-session
node script26.js

*/

var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();
app.use('/cssFiles', express.static(__dirname + '/assets'));
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
    //if (request.body.username === 'admin' && request.body.password === 'admin') {
    session.uniqueID = request.body.username;
    //}
    response.redirect('/redirects');
});

app.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect('/login');
});

app.get('/admin', (request, response) => {
    session = request.session;
    if (session.uniqueID !== 'admin') {
        response.send('Unauthorized access');
    } else {
        response.send('You are the god. <a href="/logout">KILL SESSION</a>')
    }
});

app.get('/redirects', (request, response) => {
    session = request.session;
    if (session.uniqueID === 'admin') {
        response.redirect('admin');
    } else {
        response.send(session.uniqueID + ' not found <a href="/logout">KILL SESSION</a>');
    }
});

app.listen(1337, () => {
    console.log('Listening at Port 1337');
});
