module.exports = function (password){
  if (password === 'wozerino123'){
    //DB Connection
    var mongoose = require('mongoose');
    const db = mongoose.connection;
    //User Model

    //Burn it all!!
    mongoose.connection.collections.users.drop();
    console.log('Cleared Users');
    mongoose.connection.collections.posts.drop();
    console.log('Cleared Posts');
    mongoose.connection.collections.communities.drop();
    console.log('Cleared Communities');
    mongoose.connection.collections.storms.drop();
    console.log('Cleared Storms');

    console.log('Nuke successful');

  }else{
    console.log('Invalid password');
    return false
  }
}
