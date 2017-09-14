
function ImagePreloader(images, callback){
  this.callback = callback
  this.nLoaded = 0
  this.nProcessed = 0
  this.aImages = new Array
  this.nImages = images.length
  for ( var i = 0; i < images.length; i++ ){
    this.preload(images[i])
  }
}
ImagePreloader.prototype.preload = function(image){
  var oImage = new Image;
  this.aImages.push(oImage);
  oImage.onload = ImagePreloader.prototype.onload;
  oImage.onerror = ImagePreloader.prototype.onerror;
  oImage.onabort = ImagePreloader.prototype.onabort;
  oImage.oImagePreloader = this;
  oImage.bLoaded = false;
  oImage.src = image;
}
ImagePreloader.prototype.onComplete = function(){
  this.nProcessed++;
  if ( this.nProcessed == this.nImages ){
    this.callback(this.aImages, this.nLoaded);
  }
}
ImagePreloader.prototype.onload = function(){
  this.bLoaded = true;
  this.oImagePreloader.nLoaded++;
  this.oImagePreloader.onComplete();
}
ImagePreloader.prototype.onerror = function(){
  this.bError = true;
  this.oImagePreloader.onComplete();
}
ImagePreloader.prototype.onabort = function(){
  this.bAbort = true;
  this.oImagePreloader.onComplete();
}

let imgArr = ['https://www.hujiang.com/2010/images/default2015/nav1.jpg','https://n1image.hjfile.cn/mh/2017/08/29/63e7f3e5a6c07d990f3ca0ce465495e8.jpg']

new ImagePreloader(imgArr,function(aImages,nLoaded){
  console.log(aImages)
  console.log(nLoaded)
})
