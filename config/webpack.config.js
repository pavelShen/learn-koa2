const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  entry:['./front/project1/index.js',hotMiddlewareScript],
  output: {
    filename: 'app.js',
    path: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
};
