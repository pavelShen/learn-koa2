const manifest = require('../../static/myLodash/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./myLodash/index.html', {
          env,
          manifest,
          projectName:'myLodash'
        });
      }
    