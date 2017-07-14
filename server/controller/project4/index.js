const superagent = require('superagent')
const manifest = require('../../static/project4/manifest.json')
const env = process.env.NODE_ENV

module.exports = async function (ctx, next) {
  await ctx.render('./project4/index.html', {
    env,
    manifest,
    projectName:'project4'
  });
}
