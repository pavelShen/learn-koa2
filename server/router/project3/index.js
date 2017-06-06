const Router = require('koa-router')
let router = new Router()
let controller = require('../../controller/project3/index.js')

router.get('/project3', controller);

module.exports = function(app) {
  app.use(router.routes())
}
