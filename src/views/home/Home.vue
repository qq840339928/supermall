<template>
  <div id="home">
    <NavBar class="home_navBar">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <HomeSwiper :sun_banners = 'banners'/>
    <!--recommend部分就几个图片 -->
    <HomeRecommends :sun_recommends = 'recommend'/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommends from './childComps/HomeRecommends.vue'

import { getHomeMultiData } from 'network/home.js'
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends
  },
  data () {
    return{
      banners: [],
      recommend: []
    }
  },
  created() {
    // 请求数据
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
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
