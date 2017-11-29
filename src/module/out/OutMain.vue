<template>
  <el-row>
    <el-col>

      <MainHeader :user="user"></MainHeader>

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
import { mapActions, mapState } from 'vuex'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
  },
  methods:{
    ...mapActions([
      'getUser',
    ]),
  },
  created() {
    this.getUser(localStorage.getItem('X-PLATFORM-TOKEN'))
  },
  components: {
    'MainHeader': Header,
    'MainFooter': Footer,
  },
}
</script>

<style scoped>
</style>

