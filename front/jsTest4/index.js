require('./sass/index.scss')

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


var arr = [5,10,3,10,66,7,0,-3,66,8]
arr = [...new Set(arr)]

function getSecondMax(arr){
  let max=''
  let secondMax=''

  if(Object.prototype.toString.call(arr)==='[object Array]' && arr.length>2){
    max = arr[0]
    secondMax = arr[0]

    for(let i=1;i<arr.length;i++){
      if(arr[i]>max){
        secondMax = max
        max = arr[i]
      }
      else if(arr[i]>secondMax){
        secondMax = arr[i]
      }
    }

    return secondMax
  }
}

var result2 = getSecondMax(arr)
console.log(result2)