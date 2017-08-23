

import Vue from 'vue/dist/vue'
import App from './views/index.vue'

require('./sass/index.scss')

const root = new Vue({
  el: '#app',
  components: { App },
})
