var Event = require('events').EventEmitter;
var emt = new Event();


// emt.on('myEvent', function(a, b){
//     console.log('Arguments:', arguments.length);
//     console.log('Params', arguments.callee.length);
//     // console.log(a, b);
// });

emt.on('myEvent', function(data){
    console.log(data.name.toUppcase());
    console.log(data.code.toLowercase());
});

var user = {
    name: 'Adam',
    code: 'DGE34G'
};


emt.emit('myEvent', user);