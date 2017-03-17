const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  namme: String,
  email: String,
  posts: Array,
  messages: Array,
  communities: Array,
  karma: Number
});

const user = mongoose.model('user', userSchema);

module.exports = user;
