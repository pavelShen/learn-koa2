'use strict'

const path = require('path')
const fs = require('fs')

module.exports = function(app) {
  let routePath = path.join(__dirname,'./')
  let routeFileArr = fs.readdirSync(routePath,'utf8')

  for(let item of routeFileArr){
    fs.stat(`${routePath}${item}`, (err,st) => {
      if(st.isDirectory()){
        require(`./${item}/index.js`)(app)
      }
    })
  }
}
