const manifest = require('../../static/vueTest/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./vueTest/index.html', {
          env,
          manifest,
          projectName:'vueTest'
        });
      }
    