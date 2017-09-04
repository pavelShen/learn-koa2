<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      toastText:'abc',
      testObj : {
        text:'bbb'
      },
      localCount:456
    }
  },
  methods:{
    changeText(){
      console.warn(this.$store.state.count)
    }
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      },

      x: () => 'a'
    }),
    ...mapGetters([
      'countPlus'
      // ...
    ])
  }
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // }
}
</script>


<template>
  <div>
    <div @click="changeText" >模块2</div>
    <div>{{ count }}</div>
    <div>{{ countPlus }}</div>
    <div>{{ countPlusLocalState }}</div>
    <div>{{ x }}</div>
  </div>
</template>  