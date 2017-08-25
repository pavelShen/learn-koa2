const Router = require('koa-router')
      let router = new Router()
      let controller = require('../../controller/jsTest/index.js')

      router.get('/jsTest', controller);

      module.exports = function(app) {
        app.use(router.routes())
      }
    