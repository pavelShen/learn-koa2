async function responseTime(ctx, next) {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  ctx.cookies.set('myAuth2', 'md5Value2', {httpOnly:true,maxAge:9999})
}

module.exports = responseTime