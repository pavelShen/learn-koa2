

import Vue from 'vue/dist/vue.common'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vcToast from './views/toast/index'
import App from './views/index.vue'

import Foo from './views/component/foo.vue'
import Bar from './views/component/bar.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vcToast)

require('./sass/index.scss')

const routes = [
  { path: '/', component: Foo },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  base:'/vueTest/',
  mode: 'history',
  routes
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters : {
    countPlus (state){
      return state.count + '文字2'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store
}).$mount('#app')