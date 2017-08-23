<script>
export default {
  data () {
    return {
      message: '',
      list:[
        {
          name:'a'
        },
        {
          name:'b'
        },
        {
          name:'c'
        }
      ]
    }
  },
  methods:{
    getDataId(){
      
    }
  }
}
</script>


<template>
  <div>
    <p>{{ message }}</p>  
    <input v-model="message">

    <ul @click="getDataId">
      <li v-for="item in list" :key="item.name" data-id='1'>{{ item.name }}</li>
    </ul>
  </div>
</template>  