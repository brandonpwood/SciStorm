/*
SciStorm Main App
Brandon Wood

Started 3.10.17
*/

//Dependencies
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('cookie-session');


// Authentication Dependencies
var passport = require ('passport');
var LocalStrategy = require ('passport-local').Strategy;
var expressValidator = require('express-validator')

//Database Dependencies
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scistorm');


//Constants
const port = 3000;
const timeout = 1200000; //20-minute timeout

//Controllers
var loginHandler = require('./controllers/loginHandler.js');
var indexHandler = require('./controllers/indexHandler.js');




//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Public Folder
app.use(express.static('./public'));


//Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  name: 'session',
  keys: ['mycat', 'yourcaspercat', 'wowzerinooo0o'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))



//Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


//Connect Flash
app.use(flash());

//Global Vars
app.use(function (req, res, next){
  res.locals.success_msg = req.flash('Success!');
  res.locals.error_msg = req.flash('error');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


//View Engine
app.set('view engine', 'ejs');



//Fire Controllers
loginHandler(app);
indexHandler(app);
// loginHandler(app);

//Listener
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
