var server = require('./libs/websocket-broker');

var onmessage = function(payload) {
	var obj = JSON.parse(payload.data);
	var message = obj.message;

	console.log(message);
};

var onnewthing = function(thing) {
};

server.start({
	onmessage: onmessage,
	onnewthing: onnewthing
});
