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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: true
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position.y)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollToTop () {
      this.scroll.scrollTo(0, 0, 300)
    },
    /**
     * 结束上拉加载更多
     */
    finishPullUp () {
      this.scroll.finishPullUp()
    }
  },
};
</script>
<style></style>
