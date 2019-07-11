// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import Vuex from 'vuex'
import iView from 'iview'
import './assets/js/appback.js'
import './assets/css/mui.min.css'
import './assets/css/icons-extra.css'
import 'mint-ui/lib/style.css'

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)
Vue.use(MintUI)
Vue.use(Vuex)

const ADD_COUNT = 'ADD_COUNT'
const REMOVE_COUNT = 'REMOVE_COUNT'
var store = new Vuex.Store({
  state: {
    token: '',
    userID: ''
  },
  mutations: {
    [ADD_COUNT](state, token) {
      sessionStorage.setItem("token", token)
      state.token = token
    },
    [REMOVE_COUNT](state, token) { // 退出登录

      sessionStorage.removeItem("token", token)

      state.token = token
    }
  }
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();

  store.state.token = sessionStorage.getItem('token');

  if (to.meta.requireAuth) {
    if (store.state.token !== "") {
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})

router.afterEach(route => {
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
