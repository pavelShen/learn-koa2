const path = require('path');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  entry:['./front/project1/index.js',hotMiddlewareScript],
  output: {
    filename: 'app.js',
    path: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
