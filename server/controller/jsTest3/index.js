const manifest = require('../../static/jsTest3/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./jsTest3/index.html', {
          env,
          manifest,
          projectName:'jsTest3'
        });
      }
    