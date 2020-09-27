<template>
  <div id="home">
    <NavBar class="home_navBar">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { getHomeMultiData } from 'network/home.js'
export default {
  name: "home",
  components: {
    NavBar
  },
  data () {
    return{
      banners: {}
    }
  },
  created() {
    // 请求数据
    getHomeMultiData().then(res => {
      debugger
      console.log(res)
    })
  }
}
</script>

<style scoped>
.home_navBar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
