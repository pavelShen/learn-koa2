require('./sass/index.scss')

HTMLElement.prototype.createShadowRoot = 
HTMLElement.prototype.createShadowRoot || 
HTMLElement.prototype.webkitCreateShadowRoot || 
function(){}

let tmpl = document.querySelector('#content')
let host = document.querySelector('#shadow-dom-host')
let root = host.createShadowRoot()
let cloneNode = tmpl.cloneNode(true).content
root.appendChild(cloneNode)


// jsonp
function getJSONP(opt,callback){
  var scriptElement = document.createElement('script')
  scriptElement.src = opt.src + '?callback=' + opt.callbackName
  window[opt.callbackName] = function(data){
    callback(data)
    window[opt.callbackName] = null
  }
  document.body.appendChild(scriptElement)
}

getJSONP({
  src : './jsonp/data1.js',
  callbackName: 'callbackData1'
},function(data){
  console.log(data)
})


var str = '1234567890'
var d = str.replace(/(\d{3})+$/g,function(match){
  return '-' + match
})

console.log(d)