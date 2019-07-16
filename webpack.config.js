/* global require, console, __dirname, module */
'use strict';

const webpack      = require('webpack');
const path         = require('path');
const { argv }     = require('yargs');
const { name }     = require('./package.json');
const env          = argv.env.NODE_ENV;
const libraryName  = name.replace(/-([a-z])/ig, (s, i) => i.toUpperCase());

const plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(env)
  })
];

console.log(`Environment: ${env}`);

let outputFile, optimization;

if (env === 'development') {
  outputFile =  `${name}.dev.js`;
  plugins.push(new webpack.SourceMapDevToolPlugin({ filename: `${outputFile}.map` }));
} else if (env === 'production') {
  outputFile = `${name}.min.js`;
  if (argv.minimize === 'false') {
    optimization = { minimize: false };
    outputFile = `${name}.js`;
  }
} else {
  outputFile = '[name].js';
}

const config = {
  mode: env,
  optimization,
  entry: `${__dirname}/src/${name}.js`,
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
              modules: {
                localIdentName: `${libraryName}__[local]`
              }
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
