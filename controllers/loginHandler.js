module.exports = function(app){
  //Handle index calls
  index_indicies = ['/', '/index', '/home','/index.html', '/home.html'];
  index_indicies.forEach(function(dir){
    app.get(dir, function(req, res){
      res.send('/views/static/index.html');
    })
  });
  // Handles Login calls
  login_indicies = ['/', '/login', '/home'];
  login_indicies.forEach(function(dir){
    app.get(dir, function(req, res){
      res.render('/views/static/index.ejs');
    })
  });
  // Handle 404s
}
