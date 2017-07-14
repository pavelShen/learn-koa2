const Router = require('koa-router')
let router = new Router()
let controller = require('../../controller/project4/index.js')

router.get('/project4', controller);

module.exports = function(app) {
  app.use(router.routes())
}
