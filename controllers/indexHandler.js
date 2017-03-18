module.exports = function (app){
  //Dependencies
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

  //Handle Index routes
  index_indicies = ['/', '/index', '/home','/index.html', '/home.html'];

  index_indicies.forEach( function (dir) {
    app.get(dir, function (req, res) {
      console.log('Index Requested');
      if(req.user != null) {
        res.render('templates/index.ejs');
      }
      else{
        res.redirect('/login');
      }
    })
  });
  //Handle Auth Check
  app.post('/check', function (req, res){
    if(req.user){
      console.log('Success');
    }else{
      console.log('failed');
    }
    res.redirect('/login');
  });

  // Handle 404s
  app.use(function(req, res, next){
    console.log("A failed attempt to connect was made at " + req.url);
    res.status(404).render( 'static/404.ejs' );
  });
}
