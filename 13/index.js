/*var a = 'Hello from Node.js';

console.log(console);*/
/*console.time('start');
for(let i = 0; i < 1000; i++) {

}
console.timeEnd('start');*/

/*var fs = require('fs');

var content = fs.readFileSync('demo.txt',  "utf8");
console.log(content);
console.log('End of file');*/

/*var fs = require('fs');

fs.readFile('demo.txt', 'utf8', function(err, data) {
		if(err) throw err;
		console.log(data);
});
*/


/*var fs = require('fs');

fs.appendFile('demo.txt', ' Hello World', function(err, data){
	if(err) throw err;

	//console.log(data);
});*/



var http = require('http');

var app = http.createServer(function(req, res) {
	if(req.url === '/contact'){	
		res.write('we are from Ukraine');
		res.end(); //loading...
	} else {
		res.write('Hello World');
		res.end();
	}

	
	console.log(res.url);
}).listen(3000, function(){
	console.log('Server at http://localhost:3000')
	
});

//  Lesson 14
console.log(__dirname);
console.log(__filename);


