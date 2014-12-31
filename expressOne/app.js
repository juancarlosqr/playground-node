var express = require('express');
var app = express();
var settings = {
	port: 3000
};

/*
app.get('/',function(req, resp){
  var object = {'result':true, message:'Hello Express.js'};
  resp.json(object);
});
*/

app.use(express.static('public'));

app.get('/cities', function (request, response) {
	var cities = ['Berlin', 'Zurich', 'Madrid'];
	response.json({
		'result' : true,
		'cities' : cities
	});
});

app.listen(settings.port, function(){
  console.log('Server running at http://127.0.0.1:'+ settings.port);
});

