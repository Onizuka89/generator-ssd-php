var LIVERELOAD_PORT = 35729; 

module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      livereload: {
        options:{
          livereload: LIVERELOAD_PORT
        },
        files:[
          '<%%= paths.app %>/scripts/*{js<% if(options.coffee){ %>,coffee<% } %>}',
          '<%%= paths.app %>/{img,images}/*.{png,jpg,jpeg,gif,webp,svg}',
          '<%%= paths.app %>/{css,styles}/*.{css<% if(options.sass){ %>,sass<% } %>}'
        ]
      }<% if (options.sass){ %>
      css: {
        files:[
          '<%= paths.app %>/{css,styles}/*.sass',
        ],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }<% } %>
    }
  });


  grunt.registerTask('default',[
  ]);
}
