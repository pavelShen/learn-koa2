require('./sass/index.scss')
// 原文:http://www.zhangxinxu.com/wordpress/2017/05/canvas-picture-watermark-synthesis/
// 代码原始地址：http://www.zhangxinxu.com/study/201705/js-canvas-image-watermark-synthesis.html
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const canvasHeight = ctx.canvas.height;
const canvasWidth = ctx.canvas.width;

var eleUploadFile = document.getElementById('uploadFile');
var eleImgCover = document.getElementById('imgCover');
var eleImgUploadX = document.getElementById('imgUploadX');

let core = {
  init(){
    this.bindEvent()
  },
  bindEvent(){
    eleUploadFile.addEventListener('change',(event)=>{
      var reader = new FileReader()
      var file = event.target.files[0] || event.dataTransfer.files[0];
      reader.onload = (e) => {
        var base64 = e.target.result;
        if (base64.length > 1024 * 50) {
          alert('图片尺寸请小于50K');
          return;
        } else {
          // 使用canvas合成图片，并base64化
          this.imgTogether(base64, function (url) {
              // 尺寸
              var size = 180 / (window.devicePixelRatio || 1);
              // 预览
              eleImgUploadX.innerHTML = '<img src="'+ url +'" width="'+ size +'" height="'+ size +'">';
          });
        }
      }

      reader.readAsDataURL(file)
    })
  },
  imgTogether(url, callback) {
    var canvas = document.createElement('canvas')
    var size = 180
    
    canvas.crossOrigin="anonymous"
    canvas.width = size;
    canvas.height = size;

    var context = canvas.getContext('2d');

    // 这是上传图像
    var imgUpload = new Image();
    imgUpload.onload = function () {
      // 绘制
      context.drawImage(imgUpload, 0, 0, size, size, 0,0, size, size);
      // 再次绘制
      context.drawImage(eleImgCover, size-20, 0, 20,20);
      // 回调
      callback(canvas.toDataURL('image/png'));
    };
    imgUpload.src = url;
  }
}

core.init()