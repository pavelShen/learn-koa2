const manifest = require('../../static/project5/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./project5/index.html', {
          env,
          manifest,
          projectName:'project5'
        });
      }
    