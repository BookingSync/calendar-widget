/* global require, module */
const webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'webpack'],

    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 600,

    files: [
      './tests/global-variables.js',
      './tests/**/*.js'
    ],

    preprocessors: {
      './tests/**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
