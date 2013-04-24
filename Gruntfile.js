module.exports = function(grunt) {
  
  var logFunction = function() {
    grunt.log.write('Log').ok();
  };

  grunt.registerTask('default', 'log', logFunction);
};
