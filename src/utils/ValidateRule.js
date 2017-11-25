// reg validate
export const isEmail = str => { 
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
  return reg.test(str); 
} 

// form validate
export const usernameValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入帐号'));
  }else{
    callback();
  }
};
export const passwordValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};


export const yyzzValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入营业执照号'));
  } else if (value.length !== 15 && value.length !== 18) {
    callback(new Error('营业执照号必须15位或18位'));
  } else {
    callback();
  }
};