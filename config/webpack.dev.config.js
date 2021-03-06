const webpack = require('webpack')
const targetInfo = require('./bundleTarget.js')

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

module.exports = {
  entry:{
    //main:[`./front/${targetInfo.projectName}/index.js`,hotMiddlewareScript]
    main:`./front/${targetInfo.projectName}/index.js`
  },
  output: {
    filename: '[name].js',
    path: '/'
  },
  module: {
    rules: [{  
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue-loader',
    },{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
    },{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "postcss-loader"
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
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
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-map'
}
