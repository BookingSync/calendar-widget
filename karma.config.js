var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],

    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 600,

    files: [
      './tests/**/*.js'],

    preprocessors: {
      './tests/**/*.spec.js': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },
  });
};