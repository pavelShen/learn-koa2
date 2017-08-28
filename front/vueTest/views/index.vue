<script>
export default {
  data () {
    return {
      toastText:'abc'
    }
  },
  methods:{

  }
}
</script>


<template>
  <div>
    1
    <router-view></router-view>
    <vc-toast :text.sync="toastText"></vc-toast>
  </div>
</template>  