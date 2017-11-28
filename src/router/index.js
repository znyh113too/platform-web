import Vue from 'vue'
import Router from 'vue-router'
import store, { types } from '../store'
import OutMain from '@/module/out/OutMain'
import OutHome from '@/module/out/Home'
import Login from '@/module/out/Login'
import Register from '@/module/out/Register'
import InnerMain from '@/module/inner/InnerMain'
import ApplicationList from '@/module/application/ApplicationList'
import AddApplication from '@/module/application/AddApplication'
import CheckResult from '@/module/application/CheckResult'
import ApplicationDetail from '@/module/application/ApplicationDetail'
import Pay from '@/module/server/Pay'

Vue.use(Router)

let router = new Router({
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
        {
          path: '/applicationDetail/:appId/:appApplyId',
          name: 'ApplicationDetail',
          component: ApplicationDetail,
        },
        {
          path: '/pay',
          name: 'Pay',
          component: Pay,
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(!canAccess(to.path)){
    console.log(to.path)
    let token = localStorage.getItem('X-PLATFORM-TOKEN')
    if (!token) {
      return next({ path: '/login' });
    }
  }
  window.scrollTo(0, 0)
  return next()
})

function canAccess(path){
  return path==='/' || path==='/login' || path==='/register'
}

export default router
  