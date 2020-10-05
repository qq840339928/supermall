<template>
  <div id="detail">
    <NavBar>
      <template v-slot:left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="titles">
          <div v-for="(item, index) in titles" :key='index' :class="{active: index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
          </div>
        </div>
      </template>
    </NavBar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "detail",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  created() {
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    /**
     * 导航栏的返回键
     */
    back() {
      this.$router.back()
    }
  },
}
</script>
<style scoped>
.titles{
  display: flex;
  justify-content: space-evenly;
}
.active{
  color: var(--color-tint);
}
.back > img{
  margin-top: 10px;
}
</style>
  