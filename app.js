/*
SciStorm Main Controller
Brandon Wood
Started 7/15/17
*/

// App
var express = require('express');
var app = express();
// Utils
var path =  require('path');
// Security
var helmet = require('helmet');

// Ports
app.set('port', process.env.PORT || 3000);

// Security
app.use(helmet());

// Middleware
app.use(express.static('./public'))


app.listen(app.get('port'), function(){
  console.log('Listening on port: ' + app.get('port'));
});
