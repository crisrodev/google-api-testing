var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.common.js');

module.exports = function(env){ 
  return merge(baseConfig(env), {
      target:'node',
      entry: {
        "gdrivenow-service": './src/service/main.js'
      }
  });
}