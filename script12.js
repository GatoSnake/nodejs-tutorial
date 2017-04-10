/*
Execute in terminal:

node script12.js

*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', (arg1, arg2) => {
    console.log(arg1 + arg2);
});

setTimeout(() => {
    eventEmitter.emit('myCustomEvent', 'String 1 ', 'and String 2');
}, 2000);
