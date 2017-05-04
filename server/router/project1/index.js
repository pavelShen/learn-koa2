const Router = require('koa-router')
let router = new Router()
let controller1 = require('../../controller/project1/index.js')

router.get('/a', controller1);

module.exports = function(app) {
  app.use(router.routes())
}
