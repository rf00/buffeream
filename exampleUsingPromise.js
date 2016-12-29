var buffeream = require('./index.js');

var fs = require('fs');

var readableStream = fs.createReadStream('example.js');

buffeream(readableStream).then(function(buffer) {
	
	var data = buffer.toString();
	
	console.log(data);
	
}).catch(function(err) {
	
	console.log(err);
	
});