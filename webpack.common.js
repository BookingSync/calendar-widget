/* global require, module, __dirname */

const path     = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
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
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
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
                localIdentName: 'BookingSyncCalendarWidget__[local]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
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
                localIdentName: 'BookingSyncWidgetUtils__[local]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        include: [
          path.resolve('node_modules', 'widget-utils')
        ]
      }
    ]
  }
};
