<script>
export default {
  data () {
    return {
      
    }
  },
  props:{
    text:{
      type: String,
      required: true
    }
  },
  methods:{
    changeToastText(){
      this.$emit('update:text', 'efg')
    }
  }
}
</script>


<template>
  <div>
    <span @click="changeToastText">toastText</span>
    {{ text }}
    <div>------------</div>
  </div>
</template>  