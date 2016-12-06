/* global require */
'use strict';

const webpack     = require('webpack');
const path        = require('path');
const env         = require('yargs').argv.env;
const libraryName = 'CalendarWidget';
let outputFile    = 'calendar-widget.js';

const plugins = [
  new webpack.DefinePlugin({
    VERSION:  JSON.stringify(require('./package.json').version),
    NODE_ENV: JSON.stringify(env),
  }),
];

const config = {
  entry:   [__dirname + '/src/calendar-widget.js'],
  devtool: 'source-map',
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
        test:   /(\.jsx|\.js)$/,
        loader: 'babel-loader',
      },
      {
        test:    /(\.jsx|\.js)$/,
        loader:  'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?-minimize&modules=true&localIdentName=[name]__[local]__[hash:base64:5]',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules:    [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    // directories where to look for modules
    extensions: ['.js'],
  },
  plugins,
};

if (env === 'build') {
  config.entry = [__dirname + '/src/calendar-widget.js'];
}

module.exports = config;
