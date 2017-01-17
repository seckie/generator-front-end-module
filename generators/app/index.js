'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the groovy ' + chalk.red('generator-front-end-module') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'install-dependencies',
      message: 'Would you like to install dependencieds right now?',
      default: false
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var files = [
      ['_gulpfile.js', 'gulpfile.js'],
      ['_package.json', 'package.json'],
      ['README.md', 'README.md'],
      ['editorconfig', '.editorconfig'],
      ['jshintrc', '.jshintrc'],
      ['babelrc', '.babelrc'],
      ['gitignore', '.gitignore'],
      ['stylus/style.styl', 'src/stylus/style.styl']
    ];
    files.forEach(file => {
      this.fs.copy(
        this.templatePath(file[0]),
        this.destinationPath(file[1])
      );
    });
  },

  install: function () {
    if (!this.options['skip-install'] &&
      this.options['install-dependencies']) {
      this.installDependencies();
    }
  }
});
