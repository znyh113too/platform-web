<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>应用详情</span>
        <span class="my-application" @click="toMyApplication">我的应用</span>
        <hr/>

        <el-row style="padding-top:20px;">
          <el-col :span="2">
            <img :src="applicationInfo.appIcon" class="icon">
          </el-col>
          <el-col :span="22">
            <div class="header-content">
              <span class="title">{{applicationInfo.appName}}</span>

              <div class="right">
                <el-button size="small" class="mock-button env">{{applicationInfo.accessScopeName}}</el-button>
                <el-button size="small" class="mock-button check">{{applicationInfo.appStatusName}}</el-button>
              </div>
            </div>

            <span class="desc">{{applicationInfo.appDescription}}</span>

            <div class="main-content">
              <span style="font-size:17px;">开发应用信息</span>

              <div class="line-content">
                <div class="left-label">
                  <span>应用ID</span>
                  <label>(app_id)</label>
                </div>
                 <div class="right-content">
                   <el-button type="text" size="medium">&nbsp;</el-button>
                  {{applicationInfo.appId}}
                </div>
              </div>

              <div class="line-content">
                <div class="left-label">
                  <span>应用密钥</span>
                  <label>(app_secret)</label>
                </div>
                <div class="right-content">
                  <el-button v-if="!showSecret" type="text" size="medium" @click="doShowSecret">显示</el-button>
                  <el-button v-if="showSecret" type="text" size="medium">{{applicationInfo.appSecret}}</el-button>
                  <span class="desc">应用密钥是校验布比区块链开发者应用身份的密码，属于敏感内容。切记不要讲其直接给第三方或直接存储在代码中。</span>
                </div>
              </div>

              <div class="line-content">
                <div class="left-label">
                  <span>ip白名单</span>
                  <label>(white_ips)</label>
                </div>
                <div class="right-content">
                  <el-button type="text" size="medium">配置</el-button>
                  <span class="desc">通过应用ID和应用密钥获取access_token时，需要设置访问来源IP为白名单来增强使用的安全性。</span>
                </div>
              </div>

              <div class="server">
                <div class="have-server">
                  <span class="title server-header">已开通服务</span>
                  <div class="server-content" v-for="(item, index) in applicationInfo.myOpenedAppPacks" :key="item.packCode">
                    <span class="group">{{item.packName}}</span>
                    <div class="card" @click="toServiceDetail(item)">
                      <img :src="choosePicture(item)" class="card-icon">
                      <label class="card-title">{{item.packName}}</label>
                      <span class="card-desc">{{item.packDescription}}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="server">
                <div class="have-server">
                  <span class="title server-header" >可开通服务</span>
                  <div class="server-content" v-for="(item, index) in applicationInfo.myOpeningAppPacks" :key="item.packCode">
                    <span class="group">{{item.packName}}</span>
                    <div class="card" @click="openService(item)">
                      <img :src="choosePicture(item)" class="card-icon">
                      <label class="card-title">{{item.packName}}</label>
                      <span class="card-desc">{{item.packDescription}}</span>
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
import { mapActions, mapState } from 'vuex'
import {getStateName,getApplicationEvn} from '../../core/applicationState'

export default {
  name:'ApplicationList',
  data() {
    return {
      showSecret:false,
      unchoose:require('../../assets/picture/unchoose.png'),
    }
  },
  computed: {
    ...mapState({
      applicationInfo: state => {
        let applicationDetailTemp = state.application.applicationDetail
        applicationDetailTemp.appStatusName=getStateName(applicationDetailTemp.appStatus)
        applicationDetailTemp.accessScopeName=getApplicationEvn(applicationDetailTemp.accessScope) || '未知环境'
        return applicationDetailTemp
      }
    }),
  },
  methods:{
     ...mapActions([
     'applicationDetail',
     'applicationOpenServer',
    ]),
    getParams() {
      let params = this.$route.params
      console.log(params)
      this.applicationDetail({appId:params.appId,appApplyId:params.appApplyId})
    },
    choosePicture(item){
      return require('../../assets/picture/'+item.packName+'.png')
    },
    doShowSecret(){
      if(this.applicationInfo.appStatus==='1'){
        this.showSecret=true
      }else{
        this.$alert('只有使用中应用才分配秘钥')
      }
    },
    openService(item){
      if(this.applicationInfo.appStatus==='1'){
        this.$confirm('是否确认开通'+item.packName+'服务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          // open
          this.applicationOpenServer({appId:this.applicationInfo.appId,servicePackCode:item.packCode}).then(()=>{
            this.getParams()
          }).catch((err) => {
            this.$alert(err)
          })
        }).catch(() => {
          // cancel
        });
      }else{
        this.$alert('只有使用中应用才能开通服务')
      }
    },
    toMyApplication(){
      this.$router.push({
        path: "/main"
      })
    },
    toServiceDetail(item){
      if(item.packName==='支付服务'){
        this.$router.push({
          path: "/pay"
        })
      }
    },
  },
  created () {
    this.getParams()
  },
  watch: {
    '$route': 'getParams'
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
  cursor: pointer;
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
  cursor: auto;
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
  width: 330px;
  display: inline-block;
}
</style>

