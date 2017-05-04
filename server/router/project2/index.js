const Router = require('koa-router')
let router = new Router()

router.get('/b', async function (ctx, next) {
  await ctx.render('b', {
    user: 'b'
  });
});

module.exports = function(app) {
  app.use(router.routes())
}
