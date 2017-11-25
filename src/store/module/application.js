import * as types from '../mutation-types'
import http from '../../utils/http'
import * as api from '../../core/api'

const getState = () => ({
  applicationList:[],
  applicationDetail:{

  }
})

export const state = getState()

export const actions = {

  async sendEmailVerifyCode({ commit, state }, { email}) {
    await http.get(api.EMAIL_REGISTER_VERIFY_CODE, { email})
  },

  async uploadPicture({ commit, state }, fileData) {
    let {uploadPath} = await http.uploadFile(api.PICTURE_UPLOAD, {fileName:'file',fileData})
    console.log(uploadPath)
    return uploadPath
  },

  async registerDeveloper({ commit, state }, { email,emailVerify,password}) {
    let registerData = {
      account:email,
      emailCode:emailVerify,
      password,
    }
    let result = await http.post(api.REGISTER, registerData)
    console.log(result)
    return result
  },

  async registerCompany({ commit, state }, data) {
    await http.post(api.COMPANY_INFO_REGISTER, data)
  },

  async addApplication({ commit, state }, data) {
    await http.post(api.APPLICATION_ADD, data)
  },

  async applicationList({ commit, state }, data) {
    let result = await http.get(api.APPLICATION_LIST, data)
    commit(types.APPLICATION_LIST, result)
    console.log(result)
    return result
  },

  async applicationListEffect({ commit, state }, data) {
    let result = await http.get(api.APPLICATION_LIST_EFFECT, data)
    commit(types.APPLICATION_LIST, result)
    console.log(result)
    return result
  },

  async applicationDetail({ commit, state }, {appId,appApplyId}) {
    let result = await http.get(api.APPLICATION_DETAIL+'/'+appId+'/'+appApplyId, {})
    commit(types.APPLICATION_DETAIL, result)
    console.log(result)
    return result
  },

  async applicationOpenServer({ commit, state }, data) {
    await http.post(api.APPLICATION_OPEN_SERVER, data)
  },

  async applicationAddWhiteIp({ commit, state }, data) {
    await http.post(api.APPLICATION_ADD_WHITE_IP, data)
  },

  async applicationDeleteWhiteIp({ commit, state }, data) {
    await http.post(api.APPLICATION_DELETE_WHITE_IP, data)
  },

}

export const mutations = {
  [types.APPLICATION_LIST](state, data) {
    state.applicationList=data
  },
  [types.APPLICATION_DETAIL](state, data) {
    state.applicationDetail=data
  }
}

export default {
  state,
  actions,
  mutations
}