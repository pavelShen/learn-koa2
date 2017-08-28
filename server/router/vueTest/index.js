const Router = require('koa-router')

let router = new Router()
let controller = require('../../controller/vueTest/index.js')

//router.get(/^\/vueTest$/, controller)
router.get(/\/vueTest((?!\.js).)*/, controller)

module.exports = function(app) {
  app.use(router.routes())
}
    