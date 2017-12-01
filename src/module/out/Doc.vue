<template>
 <el-row class="tac">
  <div class="content">
    <el-col :span="3" class="menu-doc">
      <el-menu :router="true" default-active="/doc" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/doc">
          <i class="el-icon-menu"></i>
          <span slot="title" >平台接入</span>
        </el-menu-item>
        <el-menu-item index="/doc/certification">
          <i class="el-icon-menu"></i>
          <span slot="title">实名接入</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="20" :offset="1">
      <router-view></router-view>
    </el-col>
  </div>

 </el-row>
</template>


<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.content{
  margin: 10px 0 0 0;
}
.menu-doc{
  height: 600px;
  border-right: 1px solid slategray;
}
</style>

