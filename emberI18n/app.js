var express = require('express');
var app = express();
var settings = {
	port: 3000
};

app.use(express.static('public'));

app.listen(settings.port, function(){
  console.log('Server running at http://127.0.0.1:' + settings.port);
});

