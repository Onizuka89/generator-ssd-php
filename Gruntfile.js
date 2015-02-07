module.exports = function(grunt){
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    mochaTest:{
      unit: {
        src: ['test/**/*Spec.js']
      }
    },
    jshint: {
      all:[
        'Gruntfile.js',
        'app/scripts/*.js'
      ]
    }
  });

  grunt.registerTask('test', [
    'jshint:all',
    'mochaTest:unit'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);
};
