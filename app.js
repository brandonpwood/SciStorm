/*
SciStorm Main App
Brandon Wood

Started 3.10.17
*/
// Dependencies
var express = require('express');
var app = express();
var path = require('path')

app.set('view enginer', 'ejs');

//Constants
const port = 3000;

//Controllers
var loginHandler = require('./controllers/loginHandler.js');


//Middle-ware
app.use(express.static('./public'));

//Fire Controllers
loginHandler(app);


//Listener
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
