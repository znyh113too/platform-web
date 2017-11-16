<template>
  <el-row class="out-content">
    <el-col>

      <div class="content">
        <span>添加应用</span>
        <span class="add-application-info">-- 登记应用信息</span>
        <hr/>

        <el-row class="main-content">
          <el-col :span="12">

            <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-position="left">
              <el-form-item label="应用图标:" prop="icon">
                <img :src="unchoose" class="icon-picture" @click="upload('iconFile')">
                <span class="text-tip picture-tip">格式支持png，推荐大小98*98像素图片</span>
                <input style="display:none;" type="file" accept="image/*" @change="fileChanged('iconFile','unchoose')" ref="iconFile" multiple="multiple">
              </el-form-item>
              <el-form-item label="应用名称:" prop="applicatonName">
                <el-input v-model="form.applicatonName"  name="applicatonName"></el-input>
                <span class="text-tip">请输入您的应用名称</span>
              </el-form-item>
              <el-form-item label="主营行业:" prop="industry">
                <el-select v-model="form.industry" placeholder="请选择">
                  <el-option v-for="item in industry" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="官网网址:" prop="webAddress">
                <el-input v-model="form.webAddress"  name="webAddress"></el-input>
                <span class="text-tip">请输入您的官网网址，以便客户了解更多信息</span>
              </el-form-item>
              <el-form-item label="应用描述:" prop="applicationDesc">
                <el-input type="textarea" :rows="3" v-model="form.applicationDesc"  name="applicationDesc"></el-input>
              </el-form-item>
            </el-form>

          </el-col>
          <el-col :span="10" :offset="2">
            <img :src="demoPicture" class="demo-picture">
          </el-col>
        </el-row>

        <div style="margin-left:100px;">
          <el-button @click="next">下一步</el-button>
        </div>


      </div>

    </el-col>
  </el-row>
</template>


<script>

export default {
  name:'AddApplication',
  data() {
    return {
      unchoose:require('../../assets/picture/unchoose.png'),
      demoPicture: require('../../assets/picture/002.jpg'),
      industry:[{
        value: '1',
        label: '电子商务'
      },{
        value: '2',
        label: 'IT服务/软件'
      },{
        value: '3',
        label: '网站'
      },{
        value: '4',
        label: '移动App'
      }],
      form:{
        icon:'',
        applicatonName:'',
        industry:'',
        webAddress:'',
        applicationDesc:'',
      },
      rules:{
        icon: [
          { required: true,  message: '请选择图标', trigger: 'blur' },
        ],
        applicatonName: [
          { required: true,  message: '请输入应用名称', trigger: 'blur' },
        ],
        industry: [
          { required: true,  message: '请选择行业', trigger: 'blur' },
        ],
        webAddress: [
          { required: true,  message: '请输入官网地址', trigger: 'blur' },
        ],
        applicationDesc: [
          { required: true,  message: '请输入应用描述', trigger: 'blur' },
        ],
      },
    }
  },
  methods:{
    next(){
      this.$router.push({
        path: "/checkResult"
      })
    },
    upload(fileRef){
      this.$refs[fileRef].click()
    },
    fileChanged(fileRef,attr){
      const item = this.$refs[fileRef].files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.$set(this, attr, e.target.result)
      }
      reader.readAsDataURL(item)
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
.text-tip{
  color:#CCCCCC;
  display: block;
}
.picture-tip{
  display: inline-block;
  vertical-align: middle;
}
.add-application-info{
  font-size: 12px;
}
.icon-picture{
  width: 50px;
  height: 50px;
  display: inline-block;
  vertical-align: middle;
}
.demo-picture{
  width: 400px;
  height: 300px;
}
</style>

