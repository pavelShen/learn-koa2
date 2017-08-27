const manifest = require('../../static/jsTest2/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./jsTest2/index.html', {
          env,
          manifest,
          projectName:'jsTest2'
        });
      }
    