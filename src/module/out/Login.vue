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
                <el-form ref="form" :model="form" :rules="rules" @keyup.enter.native="onSubmit" label-width="60px" label-position="left">
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

export default {
  name: 'Login',
  data () {
    return {
      form:{
        username:'',
        password:'',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    onSubmit(){
      this.$refs['form'].validate(valid => {
        if (!valid) return false
        this.$router.push({
          path: "/main"
        })
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
  }
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
  display: inline-block;
  float: right;
}
.link{
  padding-top: 30px;
  font-size: 15px; 
}
.link span{
   cursor:pointer;
}
</style>
