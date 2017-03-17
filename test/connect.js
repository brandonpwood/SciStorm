var mongoose = require('mongoose');

// Connect to the mongodb database
mongoose.connect('mongodb://localhost/test');

// Open database
mongoose.connection.on('open', function(){
  console.log('Connection Successful');
}).on('error', function(error){
  console.log('Error:');
  console.log(error);
});
