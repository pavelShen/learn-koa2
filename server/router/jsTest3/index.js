const Router = require('koa-router')
      let router = new Router()
      let controller = require('../../controller/jsTest3/index.js')

      router.get('/jsTest3', controller);

      module.exports = function(app) {
        app.use(router.routes())
      }
    