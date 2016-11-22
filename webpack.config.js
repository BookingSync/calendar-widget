/* global require */
'use strict';

const webpack     = require('webpack');
const path        = require('path');
const env         = require('yargs').argv.env;
const libraryName = 'calendar-widget';
let outputFile    = libraryName + '.js';

const plugins = [
  new webpack.DefinePlugin({
    VERSION:  JSON.stringify(require('./package.json').version),
    NODE_ENV: env,
  }),
];

const config = {
  entry:   [__dirname + '/src/examples.js'],
  output:  {
    path:           __dirname + '/dist',
    publicPath:     '/assets/',
    filename:       outputFile,
    library:        libraryName,
    libraryTarget:  'umd',
    umdNamedDefine: true,
  },
  module:  {
    rules: [
      {
        test:    /(\.jsx|\.js)$/,
        loader:  'babel-loader',
      },
      {
        test:    /(\.jsx|\.js)$/,
        loader:  'eslint-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    // directories where to look for modules
    extensions: ['.js'],
  },
  plugins,
};

if (env === 'build') {
  outputFile   = libraryName + '.js';
  config.entry = [__dirname + '/src/select.js'];
}

module.exports = config;
