var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.common.js');

module.exports = function(env){ 
  return merge(baseConfig(env), {
    entry: {
      "gdrivenow-client": './src/client/main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'react',
                'es2015'
                ]
            }
          }
        }
      ]
    }
  });
}