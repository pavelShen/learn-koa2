

import Vue from 'vue/dist/vue.common'
import VueRouter from 'vue-router'
import vcToast from './views/toast/index'
import App from './views/index.vue'

Vue.use(VueRouter)
Vue.use(vcToast)

require('./sass/index.scss')

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
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

const app = new Vue({
  el: '#app',
  components: { App },
  router
}).$mount('#app')