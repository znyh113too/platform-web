
// const baseUrl = 'http://localhost:8081';
const baseUrl = 'http://dev_gateway.bubi.cn/web';

export const LOGIN = baseUrl + '/account/login'
export const GET_USER = baseUrl + '/account/info'
export const REGISTER = baseUrl + '/account/register'
export const EMAIL_REGISTER_VERIFY_CODE = baseUrl + '/account/checkRegisterEmail'
export const COMPANY_INFO_REGISTER = baseUrl + '/account/company/register'
export const APPLICATION_ADD = baseUrl + '/app/add'
export const APPLICATION_LIST = baseUrl + '/app/my'
export const APPLICATION_LIST_EFFECT = baseUrl + '/app/my/pro'
export const APPLICATION_DETAIL = baseUrl + '/app'
export const APPLICATION_OPEN_SERVER = baseUrl + '/app/add/product'
export const PRODUCT_CONFIG_PAY = baseUrl + '/product/config/pay'
export const PICTURE_UPLOAD = baseUrl + '/file/upload'