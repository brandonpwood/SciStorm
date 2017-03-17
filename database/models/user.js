const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: String,
  posts: Array,
  messages: Array,
  communities: Array,
  karma: Number
});
