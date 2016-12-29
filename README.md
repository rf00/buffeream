# buffeream

[![npm version](https://badge.fury.io/js/buffeream.svg)](https://badge.fury.io/js/buffeream)

## Installation

```js
npm install buffeream
```

```js
var buffeream = require('buffeream')
```

## Usage

### `buffeream(readableStream[, callback])`

Returns buffer.

`readableStream` - stream

`callback` - callback when there is a callback

##Examples

```js
var buffeream = require('buffeream');

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
```js
buffeream(readableStream).then(function(buffer) {
	
	var data = buffer.toString();
	
	console.log(data);
	
}).catch(function(err) {
	
	console.log(err);
	
});
```

Using Async/Await:
```js
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
