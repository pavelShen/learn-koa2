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