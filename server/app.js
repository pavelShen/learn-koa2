const babel = require('babel-register')
const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')

const webpack = require('webpack')
const convert = require('koa-convert');
const webpackDevMiddleware = require("koa-webpack-dev-middleware");
const webpackHotMiddleware = require("koa-webpack-hot-middleware");
const webpackConfig = require('../config/webpack.config.js')

const app = new Koa()

app.use(serve(__dirname + '/static'), {})
app.use(views(__dirname + '/views', {
  map: {
    html: 'nunjucks'
  }
}));

let compiler = webpack(webpackConfig);
app.use(convert(webpackDevMiddleware(compiler)));
app.use(convert(webpackHotMiddleware(compiler)));

const router = require('./router/')(app)

app.listen(3000)
