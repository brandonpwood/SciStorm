const assert = require('assert');
const mocha = require('mocha');
var user = require('C:/Users/brandonwood/Doing/SciStorm/database/models/user.js');


var testUser;

//Test saving
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
  it('Find user by name', function(done){
    user.findOne({name: '1234'}).then(function(result){
      assert(result === '1234');
    });
    done();
  });
  it('Find user by id', function(done){
    user.findOne({_id: testUser._id}).then(function(result){
      assert(result === testUser._id);
    });
    done();
  });
});

//Test atomic and global updates
describe('Update', function(done){
  it('Update one user', function(done){
    user.findOne({name:'1234'}).then(function(result){
      result.update({name:'1234'}, {name: '12345'}).then(function(){
        assert (user.findOne({name: '12345'}) !=  null);
      });
    });
    done();
  });
  it('Update all users', function(done){
    user.update({}, {name: '12345'}).then(function(){
      asssert(user.findOne({name:'1234'}) === null);
    });
    done();
  });
});
//Test atomic and global removal
describe('Remove', function(done){
  it('Remove one user', function(done){
    user.findOneAndRemove({_id : testUser._id}).then(function(){
      assert(user.findOne({_id:testUser._id}) === null);
    });
    done();
  });
  it('Remove all users', function(done){
    user.remove().then(function(){
      assert(user.find() === null);
    });
    done();
  });
});
