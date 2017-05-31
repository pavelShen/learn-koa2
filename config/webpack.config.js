const path = require('path')
const webpack = require('webpack')

const webpackDevConfig = require('./webpack.dev.config.js')
const webpackProdConfig = require('./webpack.build.config.js')

let webpackConfig;
if(process.env.NODE_ENV==='dev'){
  webpackConfig = webpackDevConfig
}
else if(process.env.NODE_ENV==='prod'){
  webpackConfig = webpackProdConfig
}

module.exports = webpackConfig;
