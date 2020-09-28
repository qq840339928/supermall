<template>
  <div class="homeRecommends">
    <div v-for="(item, index) in sun_recommends" :key="index" class="homeRecommendsItem">
      <a :href="item.link">
        <img :src="item.image" alt="item.title" class="homeRecommendsItemImg">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sun_recommends: Array
  }
};
</script>
<style scoped>
.homeRecommends{
  display: flex;
}
.homeRecommendsItem{
  flex: 1;
  text-align: center;
}
.homeRecommendsItemImg{
  width: 75px;
  height: 75px;
}
</style>
