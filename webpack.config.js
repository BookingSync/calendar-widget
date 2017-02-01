/* global require */
'use strict';

const webpack     = require('webpack');
const path        = require('path');
const env         = require('yargs').argv.env;
const libraryName = 'BookingSyncCalendarWidget';
let outputFile    = 'bookingsync-calendar-widget.js';
const CSS_PREFIX  = 'BookingSyncCalendar';

const plugins = [
  new webpack.DefinePlugin({
    VERSION:  JSON.stringify(require('./package.json').version),
    NODE_ENV: JSON.stringify(env),
    CSS_PREFIX: JSON.stringify(CSS_PREFIX),
  }),
  new webpack.SourceMapDevToolPlugin()
];

const config = {
  entry:  [__dirname + '/src/bookingsync-calendar-widget.js'],
  output: {
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
        test:    /(\.js)$/,
        loader:  'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test:    /(\.scss)$/,
        loader:  'style-loader?insertAt=top&singleton!css-loader?modules=true&localIdentName=' + CSS_PREFIX + '__[Local]!sass-loader?outputStyle=expanded&sourceMap&sourceMapContents',
        exclude: /(node_modules|bower_components)/,
      }
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
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }
  ));
  config.entry = [__dirname + '/src/bookingsync-calendar-widget.js'];
}

module.exports = config;
