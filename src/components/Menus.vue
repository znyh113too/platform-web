<template>
  <el-row class="tac">
    <el-col>
       <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>应用</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">应用列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
    </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Menus',
  props: [
    'defaultActive', 'menus'
  ],
  data() {
    return {
     
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key,keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

