import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Shopcar from '../views//shopcar/shopcar.vue'
import Sort from '../views/sort/sort.vue'
import Profile from '../views/profile/profile.vue'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/home',
      component:Home
    },
    {
      path: '/shopcar',
      component:Shopcar
    },
    {
      path: '/sort',
      component:Sort
    },
    {
      path: '/profile',
      component:Profile
    }
  ]
})
export default router
