const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: String,
  users: Array,
  posts: Array,
  cover: {data: Buffer, contentType: String}
});

const community = mongoose.model('community', communitySchema);

module.exports =  community;
