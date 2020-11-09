import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home.vue'
// import user from '../components/user.vue'
// import about from '../components/about.vue'
const home = () => import('../components/home.vue')
const user = () => import('../components/user.vue')
const about = () => import('../components/about.vue')
const homeMessage = () => import('../components/home-message.vue')
const homeNew = () => import('../components/home-new.vue')
const profile = () => import('../components/profile.vue')
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '',
      component: user
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'new'
        },
        {
          path: 'new',
          component: homeNew,

        }, {
          path: 'message',
          component: homeMessage,

        }
      ]
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: '关于'
      },
    },
    {
      path: '/user/:userId',
      component: user,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        title: '档案'
      },
    }
  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title //给目标路由的页面的title赋值
  next()//必须调用，不调用不会跳转
})
export default router

