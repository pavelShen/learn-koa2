const babel = require('babel-register')
const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')

const app = new Koa()

app.use(serve(__dirname + '/static'), {})
app.use(views(__dirname + '/views', {
  map: {
    html: 'nunjucks'
  }
}));

if (util.isLocal) {
  // app.use(webpackDevMiddleware());
  // app.use(webpackHotMiddleware());
}

const router = require('./router/')(app)

app.listen(3000)
