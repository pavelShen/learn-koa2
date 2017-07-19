const Router = require('koa-router')
      let router = new Router()
      let controller = require('../../controller/project5/index.js')

      router.get('/project5', controller);

      module.exports = function(app) {
        app.use(router.routes())
      }
    