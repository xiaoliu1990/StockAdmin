import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/User',
      name: 'User',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    },
    {
      path: '/Role',
      name: 'Role',
      component: () => import('./views/Role.vue')
    },
    {
      path: '/UserForm',
      name: 'UserForm',
      component: () => import('./views/UserForm.vue')
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: () => import('./views/Echarts.vue')
    }
  ]
  // ,
  // mode: 'history'
})
