<template>
  <el-row class="head" align="middle" type="flex">
    <el-col>

      <el-row >
        <el-col :span="4" :offset="1">
          <span class="title" @click="toMain">布比开发者平台</span>
        </el-col>

        <div v-if="!login">
          <el-col :offset="15" :span="2">
            <el-button type="primary" @click="toLogin">登录</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" class="register" @click="toRegister">注册</el-button>
          </el-col>
        </div>

        <div v-if="login">
          <el-col :offset="11" :span="2">
            <span class="top-menu">消息</span>
          </el-col>
          <el-col :span="2">
            <span class="top-menu">工单</span>
          </el-col>
          <el-col :span="2">
            <span class="top-menu">1333333333@qq.com</span>
          </el-col>
        </div>
        
      </el-row>
      
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  props: ['login'],
  data () {
    return {
      
    }
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: "/login"
      })
    },
    toMain() {
      this.$router.push({
        path: "/main"
      })
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
.head{
  height: 80px;
  background-color: rgba(242, 242, 242, 1);
}
.title{
  line-height: 40px;
  font-size: 24px;
  color: #409EFF;
  height: 100%;
}
.top-menu{
  line-height: 40px;
}
</style>
