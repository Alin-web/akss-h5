import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入首页
import index from '../components/index.vue'
// 导入about
import about from '../components/about.vue'
import business from '../components/business.vue'
import culture from '../components/culture.vue'
import join from '../components/join.vue'
import contact from '../components/contact.vue'
import none from '../components/common/none.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向
  { path: '/', redirect: '/index' },
  { path:'/index', component: index},
  { path:'/about', component: about},
  { path:'/business', component: business},
  { path:'/culture', component: culture},
  { path:'/join', component: join},
  { path:'/contact', component: contact},
  { path:'/none', component: none}
  
]

const router = new VueRouter({
  routes
})

export default router
