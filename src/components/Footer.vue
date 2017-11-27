<template>
  <el-row type="flex" justify="center" align="middle" :gutter="2">
    
    <el-col :span="4" :offset="1">
      <span class="footer-left" @click="notSupport()">关于我们</span>
      <span class="footer-left" @click="notSupport()">开发文档</span>
    </el-col>

    <el-col :offset="16" :span="4">
      <span>京ICP备15052630</span>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods:{
    notSupport(){
      this.$notify.error({
        title: '还没有',
        message: '还没有'
      });
    },
  }
}
</script>

<style scoped>
.el-col{
  font-size: 16px;
  color: black;
}
.el-row{
  height: 60px;
  background-color: rgba(242, 242, 242, 1);
}
.footer-left{
  margin-right: 30px;
}
</style>
