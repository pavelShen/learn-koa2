const fs = require('fs')
const stat = fs.stat

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
let core = {
  copy(src,dst){
    // 读取目录中的所有文件/目录
    fs.readdir(src, (err, paths) => {
      if(err) {
        throw err
      }
      paths.forEach((path) => {
        let _src = src + '/' + path
        let _dst = dst + '/' + path
        let readable
        let writable

        stat(_src, (err, st) => {
            if( err ){
                throw err;
            }
            // 判断是否为文件
            if( st.isFile() ){
                // 创建读取流
                readable = fs.createReadStream(_src);
                // 创建写入流
                writable = fs.createWriteStream(_dst);   
                // 通过管道来传输流

                readable.pipe(writable);
            }
            // 如果是目录则递归调用自身
            else if(st.isDirectory()){
                this.init(_src, _dst);
            }
        });
      });
    });
  },
  init(src, dst, callback){
    if(fs.existsSync(dst)){
      this.copy(src, dst)
    }
    else{
      fs.mkdir(dst,() => {
        this.copy(src, dst)
      })
    }
  }
}

module.exports = core
// 复制目录
//core.init( './src', './build', copy );