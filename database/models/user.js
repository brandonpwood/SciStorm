const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

const userSchema = new Schema({
  namme: String,
  username: String,
  email: String,
  communities: Array,
  posts: Array,
  messages: Array,
  karma: Number,
  password: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;

module.exports.createUser =  function(newUser, callback){
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

//Get user from db with username
module.exports.getUserByUsername =  function (username, callback){
  var query = {username: username};
  user.findOne(query, callback);
};

//Get user from db with id
module.exports.findUserById = function (id, callback){
  var query = {_id: id};
  user.findOne(query, callback);
};

//Password checking
module.exports.comparePassword =  function (candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function (err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
};
