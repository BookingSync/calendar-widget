/* global require */
'use strict';

const webpack     = require('webpack');
const path        = require('path');
const env         = require('yargs').argv.env.NODE_ENV;
const libraryName = 'BookingSyncCalendarWidget';
const fileName    = 'bookingsync-calendar-widget';
const CSS_PREFIX  = 'BookingSyncCalendar';

const plugins = [
  new webpack.DefinePlugin({
    VERSION:    JSON.stringify(require('./package.json').version),
    NODE_ENV:   JSON.stringify(env),
    CSS_PREFIX: JSON.stringify(CSS_PREFIX),
  })
];

console.log(`Environment: ${env}`);

let outputFile;

if (env === 'development') {
  outputFile =  `${fileName}.js`;
  plugins.push(new webpack.SourceMapDevToolPlugin({ filename: `${outputFile}.map` }));
} else {
  outputFile = `${fileName}.min.js`;
}

const config = {
  mode: env,
  entry:  `${__dirname}/src/bookingsync-calendar-widget.js`,
  output: {
    path:           `${__dirname}/dist`,
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
        loader: 'babel-loader'
      },
      {
        test:    /(\.js)$/,
        loader:  'eslint-loader',
        exclude: /node_modules/
      },
      {
        test:    /(\.scss)$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: 'top',
              singleton: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true, 
              localIdentName: `${CSS_PREFIX}__[Local]`
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: [
                'expanded',
                'sourceMap',
                'sourceMapContents'
              ]
            }
          }
        ]
      }
    ],
  },
  resolve: {
    modules:    [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    // directories where to look for modules
    extensions: ['.js']
  },
  plugins
};

module.exports = config;
