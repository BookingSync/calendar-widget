/* global require, console, __dirname, module */
'use strict';

const webpack      = require('webpack');
const path         = require('path');
const argv         = require('yargs');
const env          = argv.env.NODE_ENV;
const libraryName  = 'BookingSyncCalendarWidget';
const fileName     = 'bookingsync-calendar-widget';
const CSS_PREFIX   = 'BookingSyncCalendar';

const plugins = [
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(require('./package.json').version),
    NODE_ENV: JSON.stringify(env),
    CSS_PREFIX: JSON.stringify(CSS_PREFIX)
  })
];

console.log(`Environment: ${env}`);

let outputFile, optimization;

if (env === 'development') {
  outputFile =  `${fileName}.dev.js`;
  plugins.push(new webpack.SourceMapDevToolPlugin({ filename: `${outputFile}.map` }));
} else if (env === 'production') {
  outputFile = `${fileName}.min.js`;
  if (argv.minimize === 'false') {
    optimization = { minimize: false };
    outputFile = `${fileName}.js`;
  }
} else {
  outputFile = '[name].js';
}

const config = {
  mode: env,
  optimization,
  entry: `${__dirname}/src/bookingsync-calendar-widget.js`,
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/assets/',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader'
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top',
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: `${CSS_PREFIX}__[Local]`
            }
          },
          {
            loader: 'sass-loader',
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
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    // directories where to look for modules
    extensions: ['.js']
  },
  plugins
};

module.exports = config;
