#!/usr/bin/env node

var prompt = require('prompt');
var PostList = require('../lib/postlist.js');
var argv = require('optimist')
  .usage("$0 --post new")
  .demand('p')
  .alias('p', 'post')
  .describe('p', 'use <new> argument to create a new post!')
  .argv;

var promptForNewPostInformation = function() {
  var onNewPostInformationsReady = function(err, informations) {
    if(err) throw err;
    
    var onPostAdded = function(postInformations) {
      console.log('blog.js'.rainbow + ': you can write your post in file\nposts/' + postInformations.ref);
    }
    
    var list = PostList.create();
    list.addNewPost(informations.title, onPostAdded);
  }

  var schema = {
    properties: {
      title: {
        description: 'gimme the title'.green,
        required: true
      }
    }
  };

  prompt.start();
  console.log('blog.js'.rainbow + ': I suppose that you have many cool things to write');
  prompt.message = 'blog.js'.rainbow;
  prompt.get(schema, onNewPostInformationsReady);
}

switch(argv.post) {
  case "new":
    promptForNewPostInformation();
    break;
  default:
    console.log("Invalid command " + argv.post + "!");
    break;
}

