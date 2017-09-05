<script>
export default {
  data () {
    return {
      items:[{
        name:'a'
      }]
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
      this.$emit('update:text', this.items[0].name)
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