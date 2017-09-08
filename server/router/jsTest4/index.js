const Router = require('koa-router')
      let router = new Router()
      let controller = require('../../controller/jsTest4/index.js')

      router.get('/jsTest4', controller);

      module.exports = function(app) {
        app.use(router.routes())
      }
    