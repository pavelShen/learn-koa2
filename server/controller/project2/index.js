const superagent = require('superagent')
const manifest = require('../../static/project2/manifest.json')
const env = process.env.NODE_ENV

module.exports = async function (ctx, next) {
  await ctx.render('./project2/index.html', {
    env,
    manifest,
    projectName:'project2'
  });
}
