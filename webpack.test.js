/* global require, module, __dirname */

const { merge }    = require('webpack-merge');
const common       = require('./webpack.common.js');
const path         = require('path');

delete common.entry;

module.exports = merge(common, {
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'temp'),
    clean: true
  },
  devtool: 'inline-source-map',
  resolve: {
    fallback: {
      util: require.resolve('util/'),
      assert: require.resolve('assert/')
    }
  }
});
