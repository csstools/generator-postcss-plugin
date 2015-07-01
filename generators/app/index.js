'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the top-notch ' + chalk.red('PostcssPlugin') + ' generator!'
    ));

    var prompts = [{
      name: 'plugin_title',
      message: 'Plugin name',
      default: 'My Plugin'
    }, {
      name: 'plugin_desc',
      message: 'This is a PostCSS plugin that',
      default: 'does awesome things'
    }, {
      name: 'author_name',
      message: 'Author name',
      default: this.user.git.name
    }, {
      name: 'author_email',
      message: 'Author email',
      default: this.user.git.email
    }, {
      name: 'github_name',
      message: 'GitHub username'
    }, {
      name: 'keywords',
      message: 'Plugin keywords',
      default: 'awesome, things'
    }];

    this.prompt(prompts, function (props) {
      props.keywords = [''].concat(props.keywords.split(/\s*,\s*/g).filter(function (i) {
        return !/^(css|postcss|postcssplugin|)$/.test(i);
      }).map(function (i) {
        return '"' + i + '"';
      })).join(',\n    ');

      props.plugin_name = props.plugin_title.replace(/\s+/g, '-').toLowerCase();

      this.props = props;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath('index.js'),
        this.props
      );
      this.fs.copy(
        this.templatePath('_LICENSE'),
        this.destinationPath('LICENSE')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_test.js'),
        this.destinationPath('test/test.js'),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('npmignore'),
        this.destinationPath('.npmignore')
      );
      this.fs.copy(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
