<template>
  <div class="goodsListItem" @click="skipToDetail">
    <div class="goodsListItemImg">
      <img :src="goodsListItem.show.img" alt="" @load="imgFinish" />
    </div>
    <div class="goods_info">
      <p>{{ goodsListItem.title }}</p>
      <span class="price">￥{{ goodsListItem.price }}</span>
      <span class="collectImg"></span>
      <span class="collect">{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsListItem: {
      type: Object,
      default: []
    }
  },
  methods: {
    imgFinish () {
      this.$bus.$emit('goodsListItemImgLoadFinish')
    },
    /**
     * 跳转到详情页面
     */
    skipToDetail () {
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  }
}
</script>
<style>
.goodsListItem {
  padding: 0.21rem;
  width: 48%;
  position: relative;
  padding-bottom: 1.68rem;
}
.goodsListItemImg{
  width: 100%;
  height: 220px;  /**写死了后期要改啊 */
}
.goodsListItemImg > img{
  width: 100%;
  height: 100%;
  border-radius: 0.21rem;
}
.goods_info{
  text-align: center;
}
.goods_info > p{
  font-size: 14px;
  White-space:nowrap;
  Overflow:hidden;
  text-overflow:ellipsis;
}
.price{
  color: var(--color-high-text);
}
.collectImg{
  display: inline-block;
  background: url("~assets/img/common/collect.svg") no-repeat;
  background-size: 14px;
  width: 14px;
  height: 14px;
  margin-left: 4px;
}
</style>