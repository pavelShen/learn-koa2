require('./sass/index.scss')

// 订阅发布
class EventEmitter {
  constructor(){
    this.queue = {}
  }
  on(event,fn){
    if(!this.queue[event]){
      this.queue[event] = []
    }
    this.queue[event].push(fn)
  }
  fire(event){
    if(this.queue[event] && this.queue[event].length>0){
      for(let fn of this.queue[event]) {
        fn.apply(null,Array.prototype.slice.call(arguments,1))
      }
    }
  }
  off(event,fn){
    if(fn){
      this.queue[event] = this.queue[event].filter((item) => {
        return item !== fn
      })
    }
    else{
      this.queue[event] = []
    }
  }
}

const event = new EventEmitter()
const drank = (person) => {
  console.log(person + '喝水')
}
event.on('drank', drank)
event.on('drank', (person) => {
  console.log(person + 'drink two')
})
event.on('eat', (person) => {
  console.log(person + '吃东西')
})

event.fire('drank', '我')   // 我喝水  
event.off('drank',drank) 
event.fire('drank', '我')   // 我喝水   
event.fire('eat', '其它人')   // 其它人吃东西
event.fire('eat', '其它人')   // 其它人吃东西
event.off('eat')  //移除eat事件
event.fire('eat', '其它人')  //这里不会触发eat事件，因为已经移除了