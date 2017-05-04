const Router = require('koa-router')
let router = new Router()

router.get('/a', async function (ctx, next) {
  await ctx.render('a', {
    user: 'a'
  });
});

module.exports = function(app) {
  app.use(router.routes())
}
