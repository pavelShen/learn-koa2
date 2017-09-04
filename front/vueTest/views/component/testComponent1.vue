<script>
export default {
  data () {
    return {
      toastText:'abc',
      testObj : {
        text:'aaa'
      }
    }
  },
  methods:{
    changeText(){
      // this.$data.testObj.text = 'new text'
      this.$store.commit('increment')
    }
  }
}
</script>


<template>
  <div>
    <div @click="changeText" >模块1</div>
    <div>{{ testObj.text }}</div>
  </div>
</template>  