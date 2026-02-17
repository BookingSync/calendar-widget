/* global require, module, __dirname */

const path = require('path');
const sass = require('sass');
const ESLintPlugin = require('eslint-webpack-plugin');

const sassLoaderOptions = {
  sourceMap: true,
  implementation: sass,
  api: 'modern',
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      'import',
      'global-builtin',
      'slash-div',
      'color-functions',
      'legacy-js-api'
    ]
  }
};

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new ESLintPlugin({
      files: './src/**/*.js'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: false
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: 'SmilyCalendar__[local]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions
          }
        ],
        exclude: [
          path.resolve('node_modules', 'widget-utils')
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: 'SmilyWidgetUtils__[local]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions
          }
        ],
        include: [
          path.resolve('node_modules', 'widget-utils')
        ]
      }
    ]
  }
};
