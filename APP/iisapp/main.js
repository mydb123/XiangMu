import Vue from 'vue'
import App from './App'
import uniCard from '@/components/uni-card/uni-card.vue'//引入插件
import uniSection from '@/components/uni-section/uni-section.vue'


export default {
    components: {uniCard,uniSection}
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

import tabBar from "@/pages/common/tabBar.vue"
Vue.component('tabBar', tabBar)
