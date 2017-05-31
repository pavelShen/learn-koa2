const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const targetInfo = require('./bundleTarget.js')

module.exports = {
  entry:{
    main:`./front/${targetInfo.projectName}/index.js`
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, `../server/static/${targetInfo.projectName}`)
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
      })
    },{
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
    new CleanWebpackPlugin([`server/static/${targetInfo.projectName}`],{
      root: path.resolve(__dirname, `../`)
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[chunkhash:8].css'),
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
