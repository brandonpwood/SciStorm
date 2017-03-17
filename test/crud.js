const assert = require('assert');
const mocha = require('mocha');
var user = require('C:/Users/brandonwood/Doing/SciStorm/database/models/user.js');

// Test saving
describe('Saving', function(){
  it('Save user', function(done){
    testUser = new user({
        name: '1234',
        email: 'woow@yahoo.com',
        posts: [1,2,4],
        messages: [1,5,6],
        communities: [7,8,9],
        karma: 10000
      });
    testUser.save().then(function(){
      assert(!testUser.isNew)
    });
    done();
  });
});
