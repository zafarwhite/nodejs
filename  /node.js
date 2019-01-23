var Event = require('events').EventEmitter;

emt.on('myEvent', function(a, b){
    console.log('Arguments:', arguments.length);
    console.log('Params', arguments.callee.length);
    // console.log(a, b);
};

emt.emit('myEvent', 2, 5, 6, 'hello');