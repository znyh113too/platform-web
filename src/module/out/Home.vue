<template>
  <el-row>
    <el-col>

      <el-row justify="center" type="flex" class="out-content" style="padding-top: 50px;">
        <el-col class="image">
          <img :src="banner" class="image">
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>


<script>

export default {
  data() {
    return {
      banner: require('../../assets/picture/002.jpg')
    }
  }
}
</script>

<style scoped>
.image{
  width: 600px;
  height: 400px;
}
</style>

