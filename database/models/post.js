const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: Array,
  comments: Array,
  upvotes: Array,
  downvotes: Array,
  score: Number
});

const post = mongoose.model('post', postSchema);

module.exports =  post;
