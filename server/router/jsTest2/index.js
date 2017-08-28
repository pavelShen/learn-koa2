const Router = require('koa-router')

let router = new Router()
let controller = require('../../controller/jsTest2/index.js')

router.get('/jsTest2', controller)

module.exports = function(app) {
  app.use(router.routes())
}
    