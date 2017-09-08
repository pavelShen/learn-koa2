const manifest = require('../../static/jsTest4/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./jsTest4/index.html', {
          env,
          manifest,
          projectName:'jsTest4'
        });
      }
    