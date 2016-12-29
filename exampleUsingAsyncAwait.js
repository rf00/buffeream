var buffeream = require('./index.js');

var fs = require('fs');

var readableStream = fs.createReadStream('example.js');

convertStreamToBuffer();

async function convertStreamToBuffer() {
	
	try {
		
		var buffer = await buffeream(readableStream);
		
		var data = buffer.toString();
		
		console.log(data);
		
	} catch (err) {
		
		console.log(err);
		
	}
	
}