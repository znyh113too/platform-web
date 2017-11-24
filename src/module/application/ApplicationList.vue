<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>我的应用</span>
        <hr/>

        <el-row style="margin-top:30px;">
          <el-col :span="4">
            <el-button class="mock-button" @click="searchAll()">全部</el-button>
            <el-button class="mock-button" @click="searchEffect()">已生效</el-button>
          </el-col>
          <el-col :offset="17" :span="2">
            <el-button @click="routerAddApplication">添加应用</el-button>
          </el-col>
        </el-row>

        <el-row>
          <el-col>

            <div class="card" v-for="(item, index) in applications" :key="item.appId" @click="toDetail(item)">
              <img :src="item.appIcon" class="icon">
              <span class="icon-title">{{item.appName}}</span>
              <span class="state check">{{item.appStatusName}}</span>
              <div class="desc">
                {{item.appDescription}}
              </div>
              <span class="env-box">{{item.accessScopeName}}</span>
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
      unchoose:require('../../assets/picture/unchoose.png'),
    }
  },
  computed: {
    ...mapState({
      applications: state => {
        let applicationListTemp = state.application.applicationList
        applicationListTemp.forEach(item=>{
          item.appStatusName=getStateName(item.appStatus)
          item.accessScopeName=getApplicationEvn(item.accessScope)
        })
        return applicationListTemp
      }
    }),
  },
  mounted() {
    this.applicationList({})
  },
  methods:{
    ...mapActions([
     'applicationList',
     'applicationListEffect',
    ]),
    searchAll(){
      this.applicationList()
    },
    searchEffect(){
      this.applicationListEffect()
    },
    routerAddApplication(){
      this.$router.push({
        path: "/addApplication"
      })
    },
    toDetail(item){
      console.log(item)
      this.$router.push({
        path: "/applicationDetail/"+item.appId+"/"+item.appApplyId,
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

