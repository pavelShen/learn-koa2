<script>
export default {
  data () {
    return {
      message: '',
    }
  }
}
</script>


<template>
  <div>
    <p>{{ message }}</p>  
    <input v-model="message">
  </div>
</template>  