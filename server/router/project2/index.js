const Router = require('koa-router')
let router = new Router()
let controller2 = require('../../controller/project2/index.js')

router.get('/b', async function (ctx, next) {
  await ctx.render('b', {
    user: 'b'
  });
});

router.get('/project2', controller2);

module.exports = function(app) {
  app.use(router.routes())
}
