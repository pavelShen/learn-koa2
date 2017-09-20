Function.prototype.myBind = function(that){
  let _that = this
  let args = [].slice.call(arguments,1)
  return function(){
    _that.apply(that,args.concat([].slice.call(arguments)))
  }
}

var test = function(a,b){
  console.log('作用域绑定 '+ this.value)
  console.log('testBind参数传递 '+ a.value2)
  console.log('调用参数传递 ' + b)
}
var obj = {
  value:'ok'
}
var fun_new = test.myBind(obj,{value2:'also ok'})

fun_new ('hello bind')