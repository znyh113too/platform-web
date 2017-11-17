<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>应用详情</span>
        <span class="my-application" @click="toMyApplication">我的应用</span>
        <hr/>

        <el-row style="padding-top:20px;">
          <el-col :span="2">
            <img :src="unchoose" class="icon">
          </el-col>
          <el-col :span="22">
            <div class="header-content">
              <span class="title">万优食品溯源</span>

              <div class="right">
                <el-button size="small" class="mock-button env">正式环境</el-button>
                <el-button size="small" class="mock-button check">审核中</el-button>
              </div>
            </div>

            <span class="desc">万优食品溯源是结合供应链的特性对区块链的接口进行继承、封装以及应用扩展，使每一个物品静态（固有特性）和动态（流转、信用）等信息能够在生产制造企业、仓储企业、物流企业、各级分销商、零售商、电商、消费者以及政府监管机构中共享、共识。</span>

            <div class="main-content">
              <span style="font-size:17px;">开发应用信息</span>

              <div class="line-content">
                <div class="left-label">
                  <span>应用ID</span>
                  <label>(app_id)</label>
                </div>
                 <div class="right-content">
                   <el-button type="text" size="medium">&nbsp;</el-button>
                  bd23ae1252f7337b08
                </div>
              </div>

              <div class="line-content">
                <div class="left-label">
                  <span>应用密钥</span>
                  <label>(app_secret)</label>
                </div>
                <div class="right-content">
                  <el-button type="text" size="medium">显示</el-button>
                  <span class="desc">应用密钥是校验布比区块链开发者应用身份的密码，属于敏感内容。切记不要讲其直接给第三方或直接存储在代码中。</span>
                </div>
              </div>

              <div class="line-content">
                <div class="left-label">
                  <span>应用ID</span>
                  <label>(app_id)</label>
                </div>
                <div class="right-content">
                  <el-button type="text" size="medium">配置</el-button>
                  <span class="desc">通过应用ID和应用密钥获取access_token时，需要设置访问来源IP为白名单来增强使用的安全性。</span>
                </div>
              </div>

              <div class="server">
                <div class="have-server">
                  <span class="title server-header">已开通服务</span>
                  <div class="server-content">
                    <span class="group">信用</span>
                    <div class="card" @click="toServerPay">
                      <img :src="unchoose" class="card-icon">
                      <label class="card-title">布丁信用评分</label>
                      <span class="card-desc">查询用户的信用评分</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="server">
                <div class="have-server">
                  <span class="title server-header">可开通服务</span>
                  <div class="server-content">
                    <span class="group">支付</span>
                    <div class="card">
                      <img :src="unchoose" class="card-icon">
                      <label class="card-title">布丁信用评分</label>
                      <span class="card-desc">查询用户的信用评分</span>
                    </div>
                  </div>
                </div>
              </div>

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
    toMyApplication(){
      this.$router.push({
        path: "/main"
      })
    },
    toServerPay(){
      this.$router.push({
        path: "/pay"
      })
    },
  }
}
</script>

<style scoped>
.content{
  padding: 50px;
}
.line-content{
  padding-top: 20px;
  height: 60px;
}
.right-content{
  display: inline-block;
}
.right-content button{
  display: block;
}
.header-content{
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
}
.main-content{
  margin-top: 30px;
}
.my-application{
  float: right;
  color: #0066FF;
}
.icon{
  height: 80px;
  width: 80px;
}
.title{
  font-weight: bold;
  font-size: 17px;
}
.server-header{
  margin-bottom: 20px;
  display: block;
}
.mock-button{
  border-radius: 0;
}
.env{
  border: 1px dashed #3399FF;
}
.check{
  border: 1px dashed red;
}
.desc{
  padding: 20px 0px;
  color: #666666;
  font-family: monospace;
  height: 40px;
}
.left-label{
  display: inline-block;
  width: 200px;
}
.left-label span{
  display: block;
}
.left-label *{
  font-size: 15px;
}
.server{
  margin-top: 50px;
}
.server .title{
  font-weight: bold;
}
.server .group{
  padding-left: 6px;
  border-left: 3px solid #3399FF;
  font-size: 13px;
  margin-bottom: 10px;
  display: block;
}
.server .card{
  padding: 20px;
  text-align:center;
  width: 240px;
  height: 100px;
  border: 1px solid lightgray;
}
.card *{
  margin: auto;
  display: block;
}
.card img{
  padding-bottom: 5px;
}
.card label{
  font-size: 16px;
}
.server .card-icon{
  height: 50px;
  width: 50px;
}
.server .card-title{
 font-size: 17px;
}
.server .card-desc{
 color: #666666;
 font-family: monospace;
}
.server .server-content{
  padding-left: 10px;
  margin-bottom: 20px;
}
</style>

