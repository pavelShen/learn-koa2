var ev = document.querySelector('.app')
var eve = new Event('自定义事件名');
ev.addEventListener('自定义事件名', function(){
    console.log('自定义事件')
});
ev.dispatchEvent(eve);