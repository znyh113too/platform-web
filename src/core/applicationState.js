// state
export const S0 = '审核中'
export const S1 = '使用中'
export const S2 = '禁用'
export const S3 = '过期'
export const S4 = '未通过'

export const applicationMapState = new Map([['0', S0], ['1', S1], ['2', S2], ['3', S3], ['4', S4]])

export function getStateName(state) {
  return applicationMapState.get(state)
}

// env
export const ENV_BOX = '沙箱环境'
export const ENV_NORMAL = '正式环境'

export const applicationEnvState = new Map([[0, ENV_BOX], [1, ENV_NORMAL]])

export function getApplicationEvn(state) {
  return applicationEnvState.get(state)
}

// company status 0 已认证 1 未认证 2 认证中 3 认证失败
export const COMPANY_STATUS_0 = '已认证'
export const COMPANY_STATUS_1 = '未认证(去认证)'
export const COMPANY_STATUS_2 = '认证中'
export const COMPANY_STATUS_3 = '认证失败(去认证)'

export const companyAuthenticationState = new Map([["0", COMPANY_STATUS_0], ["1", COMPANY_STATUS_1],
 ["2", COMPANY_STATUS_2], ["3", COMPANY_STATUS_3]])

export function getCompanyAuthenticationStateName(state) {
  return companyAuthenticationState.get(state)
}