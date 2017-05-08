## TODO:

- ~~superagent拉取数据生成页面~~
- webpack打包
  - ~~webpack-dev-middleware~~
  - ~~webpack-hot-middleware~~
  - 前端打包系列
  - manifest
  - vendor按照项目拆分
  - ~~hash后缀~~
  - ~~不同环境不同的config~~
  - webpack-merge


生产环境构建顺序
1. 生成manifest文件与dist目录
2. 上传ftp
3. 修改publicPath view目录下文件指向正确的后缀
