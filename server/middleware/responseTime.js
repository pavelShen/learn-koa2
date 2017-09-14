async function responseTime(ctx, next) {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  ctx.cookies.set('myAuth', 'md5Value', {httpOnly:true,maxAge:9999})
}

module.exports = responseTime