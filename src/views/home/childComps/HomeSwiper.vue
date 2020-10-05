<template>
  <div>
    <swiper ref="swiper">
      <template>
        <swiper-item
          v-for="(item, index) in sun_banners"
          :key="index"
          :count="sun_banners.length"
        >
          <template>
            <a :href="item.link"
              ><img :src="item.image" alt="" @load="homeSwiperImgOnload" />
              </a>
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return{
    }
  },
  props: {
    sun_banners: Array
  },
  mounted() {},
  methods: {
    /**
     * 轮播图加载完成，用于判断tab的offsetTop
     */
    homeSwiperImgOnload() {
      this.$emit('homeSwiperImgOnload')
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style></style>
