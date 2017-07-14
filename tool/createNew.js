const path = require('path');
const fs = require('fs');

const copy = require('./copyDir.js')

const pageName = process.argv[2];

let core = {
  init(){
    if(!pageName) {
      console.log('请输入项目名称')
      return false
    }
    
    if(!this.existName()){
      // this.copyFrontDir(pageName)
    }

    // this.changeBundleTarget()
  },
  existName(){
    let frontPath = path.join(__dirname,'../front/')
    let existFileArr = fs.readdirSync(frontPath,'utf8')
    if(existFileArr.includes(pageName)){
      console.log('项目已存在，请重新命名')
      return false
    }
    else {
      return true
    }
  },
  changeBundleTarget(){
    let filePath = path.join(__dirname,'../config/bundleTarget.js')
    let fileContent = fs.readFileSync(filePath,'utf-8')

    let newFileContent = this._changeExportObj(fileContent,{
      projectName: pageName
    })

    fs.writeFile(filePath, newFileContent, (err) => {
      if (err) throw err;
      console.log('bundle文件已修改')
    })
  },
  copyFrontDir(dist){
    let frontDir = path.join(__dirname,'../newProjectTemp/front')
    let targetDir = path.join(__dirname,`../front/${dist}`)
    copy.init(frontDir,targetDir)
  },
  createController(){
    let controllerStr = `
      const manifest = require('../../static/${pageName}/manifest.json')
      const env = process.env.NODE_ENV

      module.exports = async function (ctx, next) {
        await ctx.render('./${pageName}/index.html', {
          env,
          manifest,
          projectName:'${pageName}'
        });
      }
    `
    
  }
  /**
   * 
   * 
   * @param {str} 源文件 
   * @param {obj} 新值 
   */
  _changeExportObj(fileContent,newObj){
    if(fileContent){
      let reg = /{(.|\n)*}/
      let temp = fileContent.replace(reg,JSON.stringify(newObj))
      
      return temp
    }
  }
}


//core.addExistName()
core.init()