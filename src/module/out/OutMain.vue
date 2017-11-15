<template>
  <el-row>
    <el-col>

      <MainHeader :login="false"></MainHeader>

      <el-row>
        <el-col>
          <router-view></router-view>
        </el-col>
      </el-row>

      <MainFooter></MainFooter>

    </el-col>
  </el-row>
</template>


<script>

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default {
  data() {
    return {

    }
  },
  components: {
    'MainHeader': Header,
    'MainFooter': Footer,
  },
}
</script>

<style scoped>
</style>

