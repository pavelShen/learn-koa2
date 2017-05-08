const path = require('path')
const webpack = require('webpack')

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  entry:{
    main:['./front/project1/index.js',hotMiddlewareScript]
  },
  output: {
    filename: '[name].js',
    path: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: [
            'syntax-dynamic-import',
            'transform-async-to-generator',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-map'
}
