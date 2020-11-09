import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'
import user from '../components/user.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',

      component: home
    }, {
      path: '/about',

      component: about
    }, {
      path: '',
      redirect: '/home'
    }
    // {
    //   path: '/user:userId',
    //   component: user
    // }
  ],
  mode: 'history'
})
