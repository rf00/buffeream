# buffeream

[![npm version](https://badge.fury.io/js/buffeream.svg)](https://badge.fury.io/js/buffeream)

## Installation

```
npm install buffeream
```

```
var buffeream = require('buffeream')
```

## Usage

### `buffeream(readableStream[, callback])`

Returns buffer.

`readableStream` - stream

`callback` - callback when there is a callback

##Examples

```
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
```

Using Promise:
```
buffeream(readableStream).then(function(buffer) {
	
	var data = buffer.toString();
	
	console.log(data);
	
}).catch(function(err) {
	
	console.log(err);
	
});
```

Using Async/Await:
```
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
```