const manifest = require('../../static/jsTest/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./jsTest/index.html', {
          env,
          manifest,
          projectName:'jsTest'
        });
      }
    