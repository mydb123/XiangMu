import Vue from 'vue'
import lazy from 'vue-lazyload'
import AppFront from '@/components/front/AppFront.vue'
import router from'@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(lazy,{
    error:'@/common/imgs/error.svg',
    loading:'@/common/imgs/Loading.png'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#front',
  router,
  render: h => h(AppFront)
})
