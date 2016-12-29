var Q = require('q');

module.exports = function(readableStream, callback) {
	
	callback = callback || function() {};
	
	var deferred = Q.defer();
	
	var data = [];
	
	readableStream.on('data', function(chunk) {
		
		data.push(chunk);
		
	});
	
	readableStream.on('end', function() {
		
		data = Buffer.concat(data)
		
		callback(null, data);
		
		deferred.resolve(data);
		
	});
	
	readableStream.on('error', function(err) {
		
		callback(err);
		
		deferred.reject(err);
		
	});
	
	return deferred.promise;
	
};