const Router = require('koa-router')
      let router = new Router()
      let controller = require('../../controller/myLodash/index.js')

      router.get('/myLodash', controller);

      module.exports = function(app) {
        app.use(router.routes())
      }
    