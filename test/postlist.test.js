require('should');
var fs = require('fs');
var assert = require('assert');
var PostList = require('../lib/postlist.js');

describe('Post controller', function() {
  
  beforeEach(function(done){ 
    fs.writeFile(__dirname + "/../tmp/index.json", "{}", function(err) {
      if(err) throw err;
      done();
    });
  });

  afterEach(function(done){ done(); });
  before(function(done){ done(); });
  after(function(done){ done(); });

  it('should load the PostList from file', function(done) {
    var list = PostList.create();
    assert(list, 'Unable to create PostList object');
    assert(list.list, 'Unable to load json from file');
    done();
  });

  it('should add a new post', function(done) {
    var list = PostList.create();

    var checkAdd = function(newItem) {
      assert(newItem.title==="new title for add", "Returned object is invalid");
      for(var itemKey in list.list) {
        if(list.list[itemKey].title==="new title for add") {
          done();
        }
      }
    }

    list.POSTS_DIR = __dirname + "/../tmp/";
    list.INDEX_FILE_LOCATION = list.POSTS_DIR + "index.json";
    list.list = require(list.INDEX_FILE_LOCATION);

    list.addNewPost("new title for add", checkAdd);
  });

});
