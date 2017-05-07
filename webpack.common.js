var path = require('path');
var webpack = require('webpack');

module.exports = function(env){
  var baseConfig = {
    output: {
      filename: '[name].js',
      path: __dirname + '/dist'
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
                'es2015'
                ]
            }
          }
        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'DEBUG': env === "dev"
        })
    ]
  };
  return baseConfig;
}