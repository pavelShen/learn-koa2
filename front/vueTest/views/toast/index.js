import vcToast from './toast.vue'

vcToast.install = function(Vue){
    Vue.component('vc-toast', vcToast)
}
export default vcToast