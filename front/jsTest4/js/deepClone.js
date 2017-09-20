function deepClone(obj){
  let out = {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      if(typeof obj[key] === 'object'){
        out[key] = deepClone(obj[key])
      }
      else{
        out[key] = obj[key]
      }
    }
  }
  return out
}

module.exports = deepClone