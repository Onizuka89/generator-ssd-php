var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  paths:{
    app: 'app'
  },
  prompting: function(){
    var done = this.async();

    // project name
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, function(answers){
      this.log(answers.name);
      this.appname = answers.name;
      done();
    }.bind(this));

  },
  prompting2: function(){
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'fire',
      message: 'Should I fire you?',
      default: 'yes'
    }, function(answers){
      this.log(answers.fire);
      done();
    }.bind(this));
  },


  constructor: function(){
    generators.Base.apply(this, arguments);
    this.option('sass'),{
      desc: 'Include sass',
      type: 'Boolean',
      defaults: false
    };
    this.option('coffee',{
      desc: 'Include coffeescript',
      type: 'Boolean',
      defaults: false
    });
  },
  method1: function(){console.log("method 1 just ran");},
  method2: function(){console.log("method 2 just ran");},


  packageJSON: function(){
    this.template('_package.json', 'package.json');
  },

  generateIndex: function(){
    this.template('index.php', '<%= paths.app %>/index.php');
  }
});

