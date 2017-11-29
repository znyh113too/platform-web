<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>应用审核结果</span>
        <hr/>

         <el-row type="flex" justify="center" >
            <el-col class="result-title">
              <h1>恭喜您，完成布应用信息登记!</h1>
            </el-col>
          </el-row>
         <el-row type="flex" justify="center" >
            <el-col class="result-desc">
              <span class="success">我们尽快审核您的登记信息，预计时间1-2个工作日，审核结果将发至您提供的邮箱</span>
              <el-button type="primary" style="margin: 20px;" @click="toMain()">返回</el-button>
            </el-col>
          </el-row>

      </div>

    </el-col>
  </el-row>
</template>


<script>

export default {
  name:'ApplicationList',
  data() {
    return {
      unchoose:require('../../assets/picture/unchoose.png'),
    }
  },
  methods:{
    routerAddApplication(){
      this.$router.push({
        path: "/addApplication"
      })
    },
    toMain(){
      this.$router.push({
        path: "/main"
      })
    },
  }
}
</script>

<style scoped>
.content{
  padding: 50px;
}
.main-content{
  margin-top: 30px;
}
.success{
  color:red;
  font-size: 16px;
}
.result-title{
  display: inline-block;
  width: 434px;
}
.result-desc{
  display: inline-block;
  width: 587px;
}
</style>

