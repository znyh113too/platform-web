import * as types from '../mutation-types'
import http from '../../utils/http'
import * as api from '../../core/api'

const getState = () => ({
  configPay:{

  }
})

export const state = getState()

export const actions = {

  async getConfigPay({ commit, state }, data) {
    let result = await http.get(api.PRODUCT_CONFIG_PAY, data)
    console.log(result)
    commit(types.PRODUCT_CONFIG_PAY_SAVE, result)
    return result
  },

}

export const mutations = {
  [types.PRODUCT_CONFIG_PAY_SAVE](state, data) {
    state.configPay=data
  }
}

export default {
  state,
  actions,
  mutations
}