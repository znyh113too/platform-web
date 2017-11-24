<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>开通服务</span>
        <span class="content-info">-- 布比区块链支付</span>

        <el-menu default-active="info" class="el-menu-demo" mode="horizontal" 
          @select="handleSelect" style="margin-top:30px;">
          <el-menu-item index="info">商户信息</el-menu-item>
          <el-menu-item index="config">开发配置</el-menu-item>
          <el-menu-item index="guide">使用教程</el-menu-item>
        </el-menu>
        <div class="line" style="margin-bottom: 30px;"></div>

        <el-row v-if="infoShow">
          <el-col :span="12">
            <div class="info-content">
              <label>商户号</label>
              <span>{{configPay.merchantNo}}</span>
            </div>
            <div class="info-content">
              <label>商户密钥</label>
              <el-button v-if="!showSecret" type="text" size="medium" @click="doShowSecret">显示</el-button>
              <el-button v-if="showSecret" type="text" size="medium">{{configPay.merchantKey}}</el-button>
            </div>
            <div class="info-content">
              <label>公司名称</label>
              <span>{{configPay.merchantName}}</span>
            </div>
          </el-col>
          <el-col :span="12" class="info-right">
            <div class="info-content">
              <label>联系人</label>
              <span>{{configPay.contactName}}</span>
            </div>
            <div class="info-content">
              <label>手机号码</label>
              <span>{{configPay.contactPhone}}</span>
            </div>
            <div class="info-content">
              <label>联系邮箱</label>
              <span>{{configPay.contactEmail}}</span>
            </div>
          </el-col>
        </el-row>

        <el-row v-if="configShow">
          <el-col :span="2">
            IP白名单
          </el-col>
          <el-col :span="10">
            <el-button type="text" style="padding-top: 0px;font-size: 16px;">添加</el-button>
             <el-table :data="whiteList" border>
              <el-table-column prop="ip" label="IP"></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button @click="doDelete(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>

        <el-row v-if="guideShow">
          <el-col>
            <h1>使用教程</h1>
          </el-col>
        </el-row>

      </div>
    </el-col>
  </el-row>
</template>


<script>
import { mapActions, mapState } from 'vuex'

export default {
  name:'Pay',
  data() {
    return {
      showSecret:false,
      infoShow:true,
      configShow:false,
      guideShow:false,
      whiteList:[
        // {
        //   ip:'192.168.1.9',
        // },
        // {
        //   ip:'192.168.1.19',
        // },
        // {
        //   ip:'192.168.1.22',
        // },
      ]
    }
  },
  computed: {
    ...mapState({
      configPay: state => state.pay.configPay
    }),
  },
  mounted() {
    this.getConfigPay()
  },
  methods:{
    ...mapActions([
      'getConfigPay'
    ]),
    doShowSecret(){
      this.showSecret=true
    },
    handleSelect(key, keyPath) {
      this.infoShow=false;
      this.configShow=false;
      this.guideShow=false;
      this[key+="Show"]=true;
    },
    doDelete(row){
      console.log(row)
    }
  }
}
</script>

<style scoped>
.content{
  padding: 50px;
}
.content-info{
  font-size: 12px;
}
.info-content{
  height: 30px;
  line-height: 30px;
}
.info-content label{
  display: inline-block;
  width: 100px;
}
.info-content span{
  color: #999999;
}
.info-right{
  border-left: 1px solid #999999;
  padding-left: 50px;
}
</style>

