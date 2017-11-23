
export const S0 = '审核中'
export const S1 = '使用中'
export const S2 = '禁用'
export const S3 = '过期'
export const S4 = '未通过'

export const applicationMapState = new Map([['0', S0], ['1', S1], ['2', S2], ['3', S3], ['4', S4]])

export function getStateName(state) {
  return applicationMapState.get(state)
}