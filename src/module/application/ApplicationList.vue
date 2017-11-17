<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>我的应用</span>
        <hr/>

        <el-row style="margin-top:30px;">
          <el-col :span="4">
            <el-button class="mock-button">全部</el-button>
            <el-button class="mock-button">已生效</el-button>
          </el-col>
          <el-col :offset="17" :span="2">
            <el-button @click="routerAddApplication">添加应用</el-button>
          </el-col>
        </el-row>

        <el-row>
          <el-col>

            <div class="card" @click="toDetail">
              <img :src="unchoose" class="icon">
              <span class="icon-title">万优食品溯源</span>
              <span class="state use">使用中</span>
              <div class="desc">
                万优食品溯源是结合供应链的特性对区块链的接口进行继承、封装以及······
              </div>
              <span class="env-box">沙箱环境</span>
            </div>

            <div class="card">
              <img :src="unchoose" class="icon">
              <span class="icon-title">万优食品溯源</span>
              <span class="state check">审核中</span>
              <div class="desc">
                万优食品溯源是结合供应链的特性对区块链的接口进行继承、封装以及······
              </div>
              <span class="env-box">正式环境</span>
            </div>
            
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
    toDetail(){
      this.$router.push({
        path: "/applicationDetail"
      })
    },
  }
}
</script>

<style scoped>
.content{
  padding: 50px;
}
.content .mock-button{
  border-radius: 0;
}
.card{
  width: 300px;
  height: 180px;
  padding: 20px 20px 0 20px;
  border: 1px solid lightgray;
  margin-right: 50px;
  margin-top: 30px;
  display: inline-block;
}
.card .icon{
  width: 50px;
  height: 50px;
  display: inline-block;
  vertical-align: middle;
}
.card .icon-title{
  font-weight: bold;
  display: inline-block;
  line-height: 50px;
  vertical-align: middle;
}
.card .state{
  float: right;
  vertical-align: middle;
  line-height: 50px;
  font-size: 15px;
}
.card .use{
  color: #008000;
}
.card .check{
  color: red;
}
.card .desc{
  padding: 20px 0px;
  border-bottom: 1px dashed black;
  color: #666666;
  font-family: monospace;
  height: 40px;
}
.env-box{
  float: right;
  padding-top: 10px;
  color: #0099CC;
}
</style>

