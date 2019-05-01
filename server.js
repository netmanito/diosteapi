// server.js
var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function(error) {
	if (error){
		console.log("got error" +error)
	}
	else {
  		console.log('Express server listening on port ' + port);
		}
});
