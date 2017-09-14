const Router = require('koa-router')
const responseTime2 = require('../../middleware/responseTime2')

let router = new Router()
let controller = require('../../controller/jsTest4/index.js')

router.get('/jsTest4', responseTime2, controller)

module.exports = function(app) {
  app.use(router.routes())
}
    