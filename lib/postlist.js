var fs = require('fs');

var PostList = function() {
  this.POSTS_DIR = __dirname + "/../posts/";
  this.INDEX_FILE_LOCATION = this.POSTS_DIR + "index.json";

  this.list = require(this.INDEX_FILE_LOCATION);
};

PostList.prototype.addNewPost = function(titleOfPost, onPostUpdated) {
  var self = this;
  var now = new Date().toISOString();
  var fileName = now + "-" + titleOfPost + ".md";

  fs.writeFile(self.POSTS_DIR + fileName, titleOfPost, function(err) {
    if (err) throw err;
    var newItem = { "title" : titleOfPost, "ref" : fileName };
    self.list[now] = newItem;
    console.log(self.INDEX_FILE_LOCATION);
    fs.writeFile(self.INDEX_FILE_LOCATION, JSON.stringify(self.list, null, 1), function(err) {
      if (err) throw err;
      console.log("New post template created!");
      onPostUpdated(newItem);
    });
  });
}

exports.create = function(){
  return new PostList();
};
