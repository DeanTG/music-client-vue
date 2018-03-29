import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'

import Home from '../views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    }, {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})

// 路由配置
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router