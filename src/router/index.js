import Vue from 'vue'
import Router from 'vue-router'
import OutMain from '@/module/out/OutMain'
import OutHome from '@/module/out/Home'
import Login from '@/module/out/Login'
import Register from '@/module/out/Register'
import InnerMain from '@/module/inner/InnerMain'
import ApplicationList from '@/module/application/ApplicationList'
import AddApplication from '@/module/application/AddApplication'
import CheckResult from '@/module/application/CheckResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OutMain',
      component: OutMain,
      children: [
        {
          path: '/',
          name: 'OutHome',
          component: OutHome,
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
      ]
    },{
      path: '/main',
      name: 'InnerMain',
      component: InnerMain,
      children: [
        {
          path: '/',
          name: 'ApplicationList',
          component: ApplicationList,
        },
        {
          path: '/addApplication',
          name: 'AddApplication',
          component: AddApplication,
        },
        {
          path: '/checkResult',
          name: 'CheckResult',
          component: CheckResult,
        },
      ]
    },
  ]
})
