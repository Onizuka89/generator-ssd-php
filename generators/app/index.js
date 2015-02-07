var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  paths:{
    app: 'app',
    bower_components: 'bower_components'
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

    // project name
    this.prompt({
      type: 'checkbox',
      name: 'choices',
      message: 'Do you want to use any of these packages?',
      choices: [
        {name: 'SASS', checked: this.options.sass},
        {name: 'CoffeeScript', checked: this.options.coffee},
        {name: 'Bootstrap', checked: this.options.bootstrap},
        {name: 'Ember', checked: this.options.ember},
        {name: 'jQuery', checked: this.options.jQuery}
      ]
    }, function(answers){
      this.log(answers.choices);
      
      // Reset selectable options
      this.options.coffee = false;
      this.options.sass = false;
      this.options.bootstrap = false;
      this.options.ember = false;
      this.options.jQuery = false;


      for(var i = 0; i < answers.choices.length; i++){
        var choice = answers.choices[i];
        if(choice === 'CoffeeScript'){this.options.coffee = true;}
        else if(choice === 'SASS'){this.options.sass = true;}
        else if(choice === 'Bootstrap'){this.options.bootstrap = true; this.options.jQuery = true;}
        else if(choice === 'Ember'){this.options.ember = true; this.options.jQuery = true}
        else if(choice === 'jQuery'){this.options.jQuery = true}
      }
      done();
    }.bind(this));

  },

  prompting3: function(){
    var done = this.async();

    // project name
    this.prompt({
      type: 'input',
      name: 'folder',
      message: 'Specify bower component folder name',
      default: 'bower_components'
    }, function(answers){
      this.paths.bower_components = answers.folder;
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

    this.option('bootstrap',{
      desc: 'Include bootstrap',
      type: 'Boolean',
      defaults: false
    });

    this.option('ember',{
      desc: 'Include ember',
      type: 'Boolean',
      defaults: false
    });

    this.option('install',{
      desc: 'Install npm and bower dependencies',
      type: 'Boolean',
      defaults: false
    });

    this.option('jQuery',{
      desc: 'Include jQuery (including bootstrap, or ember will include it automatically)',
      type: 'Boolean',
      defaults: false
    });

  },

  packageJSON: function(){
    this.template('_package.json', 'package.json');
  },
  packageBower: function(){
    this.template('_bower.json', 'bower.json');
    this.template('_bowerrc', '.bowerrc');
  },
  generateIndex: function(){
    this.template('index.php', '<%= paths.app %>/index.php');
  },

  install: function(){
    if(this.options.install){this.installDependencies();}
  }
});

