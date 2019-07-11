import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import news from '../components/news.vue'
import read from '../components/read.vue'
import view from '../components/overview.vue'
import mecha from '../components/mecha.vue'
import tech from '../components/tech.vue'
import singleTech from '../components/singleTech.vue'
import user from '../components/user.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import singleNotice from '../components/singleNotice.vue'
import notice from '../components/notice.vue'
import info from '../components/info.vue'
import notifications from '../components/notifications.vue'
import privacy from '../components/privacy.vue'
import general from '../components/general.vue'
import push from '../components/push'
import wisdom from '../components/wisdom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/read/:id',
      component: read
    },
    {
      path: '/singleTech/:id',
      component: singleTech
    },
    {
      path: '/singleNotice/:id',
      component: singleNotice
    },
    {
      path: '/overview',
      component: view
    },
    {
      path: '/mecha',
      component: mecha
    },
    {
      path: '/tech',
      component: tech
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/notice',
      component: notice
    },
    {
      path: '/info',
      component: info
    },
    {
      path: '/notifications',
      component: notifications
    },
    {
      path: '/privacy',
      component: privacy
    },
    {
      path: '/general',
      component: general
    },
    {
      path: '/push',
      component: push
    },
    {
      path: '/wisdom',
      component: wisdom
    }
  ],
  linkActiveClass: 'mui-active'
})
