import Vue from 'vue'
import Router from 'vue-router'
import button from '@/view/nav1/button'
import icon from '@/view/nav1/icon'
import radio from '@/view/nav1/radio'
import slider from '@/view/nav2/slider'
import form from '@/view/nav2/form'
import table from '@/view/nav2/table'
import message from '@/view/nav3/message'
import password from '@/view/nav3/password'
import Login from '@/view/Login'
import Home from '@/view/Home'
import Main from '@/view/main'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login',
      hidden: true
    },
    {
      path: '/',
      component: Login,
      name: 'login',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
          { path: '/', component: Main, name: '主页' },
          { path: '/main', component: Main, name: '主页', hidden: true },
          { path: '/button', component: button, name: 'button' },
          { path: '/icon', component: icon, name: 'icon' },
          { path: '/radio', component: radio, name: 'radio' },
          { path: '/slider', component: slider, name: 'slider' },
          { path: '/form', component: form, name: 'form' },
          { path: '/table', component: table, name: 'table' },
          { path: '/message', component: message, name: 'message' },
          { path: '/password', component: password, name: 'password' },
      ]
    },

    {
      path: '*',
      name: 'button',
      redirect: button
    }
  ]
})
