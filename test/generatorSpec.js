describe('Mocha/Grunt generator test suite', function(){
  var yeoman = require('yeoman-generator');
  var path = require('path');
  var fs = require('fs-extra');

  var assert;
  var mockGen;

  before(function(done){
    assert = yeoman.assert;
    mockGen = yeoman.test;

    mockGen.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, './tmp'))
      .withArguments(['ssd-php'])
      .withPrompt({
        choices: ['Ember','SASS','CoffeeScript', 'Bootstrap']
      })
      .on('end', done);
  });

  describe('Directory Creation',function(){
    it('should generate a root directory', function(){
      assert.file('app/');
    });
  });


  describe('File Creation', function(){
    it('should generate "bower.json"', function(){
      assert.file('bower.json');
    });

    it('should generate "package.json"', function(){
      assert.file('package.json');
    });

    it('should generate ".bowerrc"', function(){
    });

    it('should generate "Gruntfile.js"', function(){
      assert.file('Gruntfile.js')
    });
  });

/*
  after(function(done){
    var filelocation = path.join(__dirname, './tmp');
    console.log(filelocation.indexOf('test'));
    if(filelocation.indexOf("test") != -1){
      fs.remove(filelocation,function(err){
        if(err) console.log(err);
        done();
      });
    }
  });
*/

});
