<script>

import componentA from './component/testComponent1.vue'
import componentB from './component/testComponent2.vue'

export default {
  data () {
    return {
      toastText:'abc'
    }
  },
  methods:{
    goFoo(){
      //this.$refs.compA.changeText()
      this.$router.push({ path: 'foo' })
    },
    goBar(){
      this.$router.push({ path: 'bar' })
    },
  },
  components:{
    componentA,
    componentB
  }
}
</script>


<template>
  <div>
    <!-- <div @click="goFoo">goFoo</div>
    <div @click="goBar">goBar</div> -->
    <router-view></router-view>
    <vc-toast :text.sync="toastText"></vc-toast>
    <!-- <component-a ref="compA"></component-a>
    <component-b></component-b> -->
  </div>
</template>  