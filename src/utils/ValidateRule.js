// reg validate
export const isEmail = (str) => {
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(str);
} 
export const isURL = (str) => {
  return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
}
export const isIDCard = (str) => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
  return reg.test(str)
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
export const URLValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入网址'));
  } else if (!isURL(value)) {
    callback(new Error('请输入正确的网址'));
  } else {
    callback();
  }
};
export const IDCardValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入身份证'));
  } else if (!isIDCard(value)) {
    callback(new Error('请输入正确的身份证'));
  } else {
    callback();
  }
};
export const phoneValidate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号'));
  } else if (isNaN(value)) {
    callback(new Error('请输入正确的手机号'));
  } else if (value.length!==11) {
    callback(new Error('请输入正确的手机号'));
  } else {
    callback();
  }
};