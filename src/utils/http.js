import 'whatwg-fetch'
import router from '../router'

// 缺省请求头
const defaultHeaders = () => ({
  // 'X-PLATFORM-TOKEN': localStorage.getItem('X-PLATFORM-TOKEN'),
  'Accept': 'application/json;charset=UTF-8',
  'Content-Type': 'application/json;charset=UTF-8' // application/x-www-form-urlencoded
})

const methodGet = 'get';
const methodPost = 'post';
const methodPut = 'put';
const methodDelete = 'delete';

const callService = async (url, opts, method, headers) => {
  if (!opts) opts = {};

  url=addToken(url)

  let response = await fetch(url, getFetchHeader(opts, method, headers))

  let { meta: { code, message }, data } = await response.json()

  if (code !== 0) {
    console.log(message)
    // token过期
    if (code === 20005) {
      localStorage.removeItem('X-PLATFORM-TOKEN')
      router.push({ path: '/login'})
    }
    throw message
  }

  return data

};

function addToken(url){
  if(localStorage.getItem('X-PLATFORM-TOKEN')){
    if(url.indexOf("?") !== -1){
      url=url+'&userToken='+localStorage.getItem('X-PLATFORM-TOKEN')
    }else{
      url=url+'?userToken='+localStorage.getItem('X-PLATFORM-TOKEN')
    }
  }
  return url
}

function getFetchHeader(opts, method, headers) {
  if (method === methodGet) {
    return {
      method: method,
      headers: headers
    }
  } else {
    return {
      method: method,
      headers: headers,
      body: JSON.stringify(opts)
    }
  }
}

export const get = async (url, args = {}) => {
  url = converGetParam(url, args)
  return await callService(url, {}, methodGet, defaultHeaders())
}

function converGetParam(url, param) {
  url += '?'
  for (let key in param) {
    if (!Array.isArray(param[key])) {
      url += key + '=' + param[key] + "&"
    }
  }
  return url.substring(0,url.length-1)
}

export const post = async (url, args) => {
  return await callService(url, args, methodPost, defaultHeaders())
}
export const put = async (url, args) => {
  return await callService(url, args, methodPut, defaultHeaders())
}

export const del = async (url, args) => {
  return await callService(url, args, methodDelete, defaultHeaders())
}

export const uploadFile = async (url,{fileName,fileData}) =>{
  let formData =new FormData();
  formData.append(fileName,fileData);
  const option ={
    method:'post',
    mode:'cors', 
    // headers: {
    //     'Content-Type': 'multipart/form-data'
    // },                                                                          
    body:formData
  };
  let response = await fetch(url,option)

  let { meta: { code, message }, data } = await response.json()

  if (code !== 0) {
    console.log(message)
    throw message
  }

  return data
}

export const download = async (url,filename)=>{
  let response = await fetch(url, getFetchHeader({}, methodGet, defaultHeaders()))

  let blob = await response.blob()

  var a = document.createElement('a');
  var url = window.URL.createObjectURL(blob)
  var filename = filename
  a.href = url
  a.download = filename
  a.click()
  window.URL.revokeObjectURL(url)
}

export default {
  get,
  post,
  put,
  del,
  uploadFile,
  download
}
