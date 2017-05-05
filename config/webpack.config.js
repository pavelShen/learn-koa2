const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

let webpackConfig;
if(process.env.NODE_ENV==='dev'){
  webpackConfig = {
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
}
else if(process.env.NODE_ENV==='prod'){
  webpackConfig = {
    entry:{
      main:'./front/project1/index.js'
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      path: path.resolve(__dirname, '../dist')
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
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
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
         // 该配置假定你引入的 vendor 存在于 node_modules 目录中
         return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      new ManifestPlugin()
    ]
  }
}

module.exports = webpackConfig;
