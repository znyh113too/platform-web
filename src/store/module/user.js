import * as types from '../mutation-types'
import http from '../../utils/http'
import * as api from '../../core/api'

const getState = () => ({
  user: {
    accountName: '',
  }
})

export const state = getState()

export const actions = {

  async login({ commit, state }, { username, password }) {
    let result = await http.post(api.LOGIN, { account:username, password })
    console.log(result)
    return result
  },

  async getUser({ commit, state }, token) {
    let data = await http.get(api.GET_USER, {userToken: token })
    console.log(data)
    commit(types.USER_FETCH, data)
  },

  async logout({ commit, state }) {
    localStorage.removeItem('X-PLATFORM-TOKEN')
  }

}

export const mutations = {
  [types.USER_FETCH](state, user) {
    Object.assign(state.user, user)
  }
}

export default {
  state,
  actions,
  mutations
}