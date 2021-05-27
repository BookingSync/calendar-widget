/* global require, module */

const { merge }    = require('webpack-merge');
const { name }     = require('./package.json');
const common       = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `${name}.min.js`
  }
});
