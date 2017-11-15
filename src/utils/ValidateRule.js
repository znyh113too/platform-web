
const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (this.registerForm.reptyPassword !== '') {
      this.$refs.registerForm.validateField('reptyPassword');
    }
    callback();
  }
};

const validateRepeatPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== this.registerForm.password) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
};

export default{
  validatePassword,
  validateRepeatPassword,
}
