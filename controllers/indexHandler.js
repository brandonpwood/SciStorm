module.exports = function (app){
  index_indicies.forEach( function (dir) {
    app.get( dir, function (req, res) {
      if(req.user) {
        res.render( 'templates/index.ejs');
      }
      else{
        return res.redirect('/login');
      }
    })
  });
  // Handle 404s
  app.use(function(req, res, next){
    console.log("A failed attempt to connect was made at " + req.url);
    res.status(404).render( 'static/404.ejs' );
  });
}
