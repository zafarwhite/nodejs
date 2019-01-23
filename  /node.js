var Event = require('event').EventEmitter;

var emt = new Event();

emt.on('event', function(){
    setTimeout(function(){
        console.log('Listener 1');
    }, 0);
});
emt.on('event', function(){
    setImmediate(function(){
        console.log('Listener 2');
    }, 0);
});
emt.on('event', function(){
    console.log('Listener 3');
});

emt.emit('event');