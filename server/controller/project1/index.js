const superagent = require('superagent')

var getData = function(){
  return new Promise((resolve, reject) => {
    try {
      var data = superagent
        .get('https://api.site.hujiang.com/Web/tx.ashx')
        .set('Content-Type', 'application/json')
        .query({
            pageSize: 3,
            pageIndex: 1,
            op:'GetTxInfoList',
            top:1,
            txID:25,
            lang:'jp'
        });
      resolve( data )
    } catch ( err ) {
      reject( err )
    }
  })
}

module.exports = async function (ctx, next) {
  let data = await getData()
  let text = JSON.parse(data.text)

  await ctx.render('a', {
    user: text.Code
  });
}
