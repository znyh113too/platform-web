<template>
  <el-row class="head" align="middle" type="flex">
    <el-col>

      <el-row >
        <el-col :span="4" :offset="1">
          <span class="title" @click="toMain">布比开发者平台</span>
        </el-col>

        <div v-if="!isLogin">
          <el-col :offset="15" :span="2">
            <el-button type="primary" @click="toLogin">登录</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" class="register" @click="toRegister">注册</el-button>
          </el-col>
        </div>

        <div v-if="isLogin">
          <!-- <el-col :offset="11" :span="2">
            <span class="top-menu">消息</span>
          </el-col> -->
          <el-col :offset="7" :span="5">
            <span class="top-menu" @click="toAuth()">认证状态:<span class="auth">{{user.authorizedStatusName}}</span></span>
          </el-col> 
          <el-col :span="5">
            <span class="top-menu">欢迎您:{{user.accountName}}</span>
          </el-col>
          <el-col :span="2">
            <span class="top-menu logout" @click="toLogout">退出</span>
          </el-col> 
        </div>
        
      </el-row>
      
    </el-col>
  </el-row>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Header',
  props: ['user'],
  data () {
    return {
    }
  },
  computed:{
    isLogin(){
      return this.user.accountName!==''
    },
  },
  mounted(){
    console.log(this.user)
  },
  methods: {
    ...mapActions([
      'logout',
      'getUser',
    ]),
    toLogin() {
      this.$router.push({
        path: "/login"
      })
    },
    toLogout(){
      this.logout().then(()=>{
        this.$router.push({
          path: "/login",
        })
      })
    },
    toMain() {
      this.$router.push({
        path: "/main"
      })
    },
    toAuth(){
      if(this.user.canRouterAuthentication){
        this.$router.push({
          path: "/register"
        })
      }else{
        this.$router.push({
          path: "/main"
        })
      }
    },
    toRegister() {
     this.$router.push({
        path: "/register"
     })
    }
  }
}
</script>

<style scoped>
.logout{
  cursor: pointer;
  color: #0066FF;
}
.head{
  height: 80px;
  background-color: rgba(242, 242, 242, 1);
}
.title{
  line-height: 40px;
  font-size: 24px;
  color: #409EFF;
  height: 100%;
  cursor: pointer;
}
.top-menu{
  line-height: 40px;
}
.auth{
  cursor: pointer;
  color: #0066FF;
}
</style>
