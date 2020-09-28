<template>
  <div class="goodsList">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goodsListItem="item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Object,
      default: {}
    }
  },
};
</script>

<style scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>
