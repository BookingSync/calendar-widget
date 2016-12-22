/* global require */
'use strict';

const webpack     = require('webpack');
const path        = require('path');
const env         = require('yargs').argv.env;
const libraryName = 'BookingSyncCalendarWidget';
let outputFile    = 'bookingsync-calendar-widget.js';

const plugins = [
  new webpack.DefinePlugin({
    VERSION:  JSON.stringify(require('./package.json').version),
    NODE_ENV: JSON.stringify(env),
  }),
  new webpack.SourceMapDevToolPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
];

const config = {
  entry:   [__dirname + '/src/bookingsync-calendar-widget.js'],
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
        test:   /(\.js)$/,
        loader: 'babel-loader',
      },
      {
        test:    /(\.jsx|\.js)$/,
        loader:  'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader?insertAt=top&singleton!css-loader?modules=true&localIdentName=BookingSync[Name]__[Local]',
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
  config.entry = [__dirname + '/src/bookingsync-calendar-widget.js'];
}

module.exports = config;
