require('./sass/index.scss')


let arr = ['abc','efg','aef',['ca',['app','eftg',[]]]]

let core = {
  out:[],
  _isBaseType(obj){
    let type = typeof obj
    return type !== 'object'
  },
  _isArray(obj){
    return Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]'
  },
  _hasText(key,text){
    return text.includes(key)
  },
  init(arr){
    for(let item of arr) {
      if(this._isBaseType(item)){
        if(this._hasText('a',item)){
          this.out.push(item)
        }
      }
      else{
        this.init(item)
      }
    }

    return this.out
  }
}

var result = core.init(arr)
console.log(result)