function getURLPara(){
  let obj = {}
  let search = location.search.slice(1) // a=1&b=3&&c=4&d==f=4
  search = 'a=1&b=3&&c=4&d==f=4&a=99'
  search = search.split('&').map((item,index) => {
    return item.split('=')
  })

  for(let item of search){
    if(item.length===2){
      let key = item[0]
      let val = item[1]
      obj[key] = val
    }
  }
  
  return obj
}

var para = getURLPara()
console.log(para)