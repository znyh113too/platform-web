<template>
  <el-row>
    <el-col>

      <el-row class="out-content inner-content">
        <el-col :offset="9" :span="6">
            
            <el-row type="flex" justify="center" class="title">
              <el-col style="width: 44px;">
                <span>登陆</span>
              </el-col>
            </el-row>

            <el-row>
              <el-col> 
                <el-form ref="form" status-icon :rules="rules" :model="form" label-width="60px" label-position="left">
                  <el-form-item label="账号:" prop="username">
                    <el-input v-model="form.username" name="username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码:" prop="password">
                    <el-input v-model="form.password" type="password" name="password"></el-input>
                  </el-form-item>
                  <div>
                    <el-button style="width:100%" @click="onSubmit">登录</el-button>
                  </div>
                  <div class="link">
                    <span @click="resetPassword">重置密码</span>
                    <span @click="toRegister" class="register-link">注册账户</span>
                  </div>
                </el-form>
              </el-col>
            </el-row>
           
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
import { usernameValidate,passwordValidate } from '../../utils/validateRule'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
     
    return {
      form:{
        username:'',
        password:'',
      },
      rules:{
        username: [
          { validator: usernameValidate, trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        password: [
          { validator: passwordValidate, trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    onSubmit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.login(this.form).then(({ userToken }) => {
            localStorage.setItem('X-PLATFORM-TOKEN', userToken)
            this.$router.push({
              path: "/main"
            })
          }).catch(err => {
            this.$alert(err)
          })
        }
      })
    },
    resetPassword(){
       this.$notify.error({
        title: '还没有',
        message: '还没有'
      });
    },
    toRegister(){
      this.$router.push({
        path: "/register"
      })
    }
  },
}
</script>

<style scoped>
.title{
  height: 50px;
  margin-bottom: 30px;
}
.title span{
  font-size: 22px;
  line-height:50px;
}
.inner-content{
  padding-top: 50px;
}
.register-link{
  float: right;
}
.link{
  padding-top: 30px;
  font-size: 15px; 
}
.link span{
   cursor:pointer;
}
.el-form-item.is-required .el-form-item__label::before{
  content:'';
}
</style>
