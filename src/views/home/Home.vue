<template>
  <div id="home">
    <NavBar class="home_navBar">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <Scroll class="wrapper" ref="scroll" @scroll = 'scroll' @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <HomeSwiper :sun_banners = 'banners' class="home_HomeSwiper"/>
      <!--推荐recommend部分就几个图片 -->
      <HomeRecommends :sun_recommends = 'recommend'/>
      <hr class="HomeFeatureTopHr"/>
      <!--流行-->
      <HomeFeature/>
      <!-- 流行-新款-精选 -->
      <TabControl :titles="['流行', '新款', '精选']" @setCurrentIndex="setCurrentIndex"/>
      <!-- 详细数据展示 -->
      <goodsList :goodsList="goods[currentType].data"></goodsList>
    </Scroll>
    <back-top 
      v-show="isShowBackToTop"
      @backToTop = 'backToTop'
      :probeType = '3'
      
    />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommends from './childComps/HomeRecommends.vue'
import HomeFeature from './childComps/HomeFeature'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import { getHomeMultiData, getHomeGoods } from 'network/home.js'
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return{
      banners: [],
      recommend: [],
      goods: {
        'pop': {data: [], page: 1}, // 接口page穿0没有数据，第一页默认从1开始
        'new': {data: [], page: 1},
        'sell': {data: [], page: 1},
      },
      currentType: 'pop',
      isShowBackToTop: false
    }
  },
  created() {
    // 请求轮播图和推荐的数据
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    // 请求详细数据的数据
    this.getFirstHomeGoods()
  },
  methods: {
    setCurrentIndex(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },
    /**
     * 第一次请求home的详细数据，请求流行，新款，精选三类的第一页数据
     */
    getFirstHomeGoods() {
      this.getHomeGoods('pop', 1) // 接口page穿0没有数据，第一页默认从1开始
      this.getHomeGoods('new', 1)
      this.getHomeGoods('sell', 1)
    },
    /**
     * 根据类型和页码查询对应home详细数据
     */
    getHomeGoods(type, page) {
      getHomeGoods(type, page).then(res => {
        this.goods[type].data.push(...res.data.list)
        this.goods[type].page = ++page
        this.$refs.scroll.finishPullUp()
      })
    },
    /**
     * 右下角返回顶部按钮
     */
    backToTop () {
      this.$refs.scroll.scrollToTop()
    },
    /**
     * 设置是否显示返回顶部按钮
     */
    scroll (positionY) {
      this.isShowBackToTop = -(positionY) > 1000
    },
    /**
     * 上拉加载更多
     */
    pullingUp () {
      this.getHomeGoods(this.currentType, this.goods[this.currentType].page)
    }
  }
}
</script>

<style scoped>
.home_navBar{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  width: 100%;
}
.home_HomeSwiper{
  padding-top: 44px;
}
.HomeFeatureTopHr{
  display: block;
  border: 0;
  background-color:darkgray;
  height: 15px;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 13.44px;
  overflow: hidden;
  background-color: #fff;
}
</style>
