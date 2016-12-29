var buffeream = require('./index.js');

var fs = require('fs');

var readableStream = fs.createReadStream('example.js');

buffeream(readableStream, function(err, buffer) {
	
	if (err) {
		
		console.log(err);
		
		return;
		
	}
	
	var data = buffer.toString();
	
	console.log(data);
	
});