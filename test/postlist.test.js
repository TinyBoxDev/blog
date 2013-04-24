require('should');
var assert = require('assert');
var PostList = require('../lib/postlist.js');

describe('Post controller', function() {
  beforeEach(function(done){ done(); });
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
    list.addNewPost("new title", done);
    //done();
  });

});
