<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"

export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    console.log(this.scroll)
    this.scroll.on('scroll', (position) => {
    })
    this.scroll.on('pullingUp', () => {
        console.log('加载更多')
        this.scroll.finishPullUp()
    })
  },
  methods: {
    scrollToTop () {
      this.scroll.scrollTo(0, 0)
    }
  },
};
</script>
<style></style>
