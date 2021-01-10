import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 导入全局样式
import './assets/css/global.css'
// 引入iview ui库
import './plugins/iview.js'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
