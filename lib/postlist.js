var fs = require('fs');

var POSTS_DIR = __dirname + "/../posts/";
var INDEX_FILE_LOCATION = POSTS_DIR + "index.json";

var PostList = function() {
  this.list = require(INDEX_FILE_LOCATION);
};

PostList.prototype.addNewPost = function(titleOfPost, onPostUpdated) {
  var self = this;
  var now = new Date().toISOString();
  var fileName = now + "-" + titleOfPost + ".md";

  fs.writeFile(POSTS_DIR + fileName, titleOfPost, function(err) {
    if (err) throw err;
    self.list[now] = { "title" : titleOfPost, "ref" : fileName };
    console.log(self.list);
    fs.writeFile(INDEX_FILE_LOCATION, JSON.stringify(self.list, null, 1), function(err) {
      if (err) throw err;
      console.log("List updated!");
      this.list = require(INDEX_FILE_LOCATION);
      onPostUpdated();
    });
  });
}

exports.create = function(){
  return new PostList();
};
