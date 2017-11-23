import Vue from 'vue';
import Vuex from 'vuex';
import application from './module/application'
import pay from './module/pay'
import user from './module/user'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export {
  types
}

export default new Vuex.Store({
  modules: {
    application,
    pay,
    user
  },
  plugins: debug ? [] : []
})