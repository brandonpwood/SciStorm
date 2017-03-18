module.exports = function(app){
  //Passport Dependencies
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var session = require('cookie-session');

  //Passport
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(session({
    name: 'session',
    keys: ['mycat', 'yourcaspercat', 'wowzerinooo0o'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));

  //Dependencies
  var path = require('path');
  var User = require('../database/models/user.js');


  // Handle index calls
  index_indicies = ['/', '/index', '/home','/index.html', '/home.html'];


  //Handles Login calls
  login_indicies = ['/', '/login', '/home', '/register'];

  login_indicies.forEach( function (dir) {
    app.get(dir, function (req, res){
      res.render( 'static/login.ejs' );
    })
  });

  //Handle Auth Check
  app.post('/check', function (req, res){
    if(req.user){
      console.log('Success');
    }else{
      console.log('failed');
    }
    console.log(req.user);
    res.redirect('/login');
  });



  //Passport Initialization
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.getUserByUsername(username, function(err, user){
        if (err) throw err;
        if(!user){
          return done(null, false, {message: 'Unknown user.'});
        }
        User.comparePassword(password, user.password, function (err, isMatch){
          if (err) throw err;
          if(isMatch){
            return done(null, user);
          }else{
            return done(null, false, {message: 'Invalid password.'});
          }
        });
        console.log ('Welcome ' +  user.username );
      });
    })
  );


  //Login Attempts
  app.post('/login', passport.authenticate( 'local', {successRedirect: '/', failureRedirect: '/login'}) );

  //Serialize User
  passport.serializeUser(function (user, done){
    done(null, user.id);
  });

  //Deserialize User
  passport.deserializeUser(function (id, done){
    User.findUserById(id, function (err, user){
      done(err, user);
    });
  });



  // Make new users
  app.post('/register', function(req, res){
    //Unwrap request
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password1 = req.body.password1;
    var password2 = req.body.password2;

    //Validations
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('password1', 'Password is required.').notEmpty();
    req.checkBody('email', 'Email is required.').notEmpty();
    req.checkBody('email', 'Email is not valid.').isEmail();
    req.checkBody('username', 'Username is required.').notEmpty();
    req.checkBody('password2', 'Paswords do not match.').equals(req.body.password1);

    var errors = req.validationErrors();
    if(errors){
      console.log('Failed to register');
    }else{
      var newUser = new User({
        name: name,
        username: username,
        email: email,
        password: password1
      });
      User.createUser(newUser, function(err, user){
          if(err) throw(err);
      });
      console.log('Registration was a success!')

      req.flash('success_msg', 'You are registered and can now log in');
    }

    res.redirect('/login');
  });



  //Log Out
  app.get('/logout', function (req, res){
    req.logout();

    req.flash('success_msg', 'You have been logged out');
    console.log('Logout successful');

    res.redirect('/login');
  });



}
