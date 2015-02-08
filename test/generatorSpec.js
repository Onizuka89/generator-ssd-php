var _ = require('underscore');
var should = require('should');
var testData = [

{
  title: "Test of ssd-php generator with no parameters",
  arguments: [
    'ssd-php'
  ],
  prompt:{
    choices: [
    ]
  }
},

{
  title: "Test of ssd-php generator with SASS",
  arguments: [
    'ssd-php'
  ],
  prompt:{
    choices: [
      'SASS'
    ]
  }
},

{
  title: "Test of ssd-php generator with jQuery",
  arguments: [
    'ssd-php'
  ],
  prompt:{
    choices:[
      'jQuery'
    ]
  }
}
];

function haveChoice(obj, str){
  return _.contains(obj.prompt.choices, str);
}

for(var i = 0; i < testData.length; i++){

  (function(object){
    describe(object.title, function(){
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
          .withArguments(object.arguments)
          .withPrompt(object.prompt)
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

      describe('Validate "package.json"', function(){
        var json = null;
        it('should parse', function(){
          var file = fs.readFileSync(path.join(__dirname, './tmp', 'package.json'),"utf8");
          try{
            json = JSON.parse(file);
          }catch(e){
            json = null;
            should.fail('JSON was not parsed.');
          }

        });

        if(haveChoice(object, 'SASS')){
          it('should include SASS', function(){
            should.exist(json.devDependencies.sass);
          });
        }

      });

      describe('Validate "bower.json"', function(){
        var json = null;
        it('should parse', function(){
          var file = fs.readFileSync(path.join(__dirname, './tmp', 'bower.json'),"utf8");
          try{
            json = JSON.parse(file);
          }catch(e){
            json = null;
            should.fail('JSON was not parsed.');
          }
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
  })(testData[i]);
};
