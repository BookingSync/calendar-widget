/* global require, module */

const { merge }    = require('webpack-merge');
const { name }     = require('./package.json');
const common       = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: `${name}.js`
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: './',
      watch: {
        ignored: ['**/dist/**', '**/temp/**', '**/.git/**', '**/node_modules/**']
      }
    },
    watchFiles: ['index.html'],
    hot: true,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
});
