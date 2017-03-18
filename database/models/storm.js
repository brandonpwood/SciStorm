const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stormSchema = new Schema({
  Title: String,
  posts: Array,
  usersl: Array,
  decription: String
});

const storm = mongoose.model('storm', stormSchema);

module.exports = storm;
