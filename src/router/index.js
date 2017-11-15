import Vue from 'vue'
import Router from 'vue-router'
import OutMain from '@/module/out/OutMain'
import OutHome from '@/module/out/Home'
import Login from '@/module/out/Login'
import Register from '@/module/out/Register'

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
    },
    
  ]
})
