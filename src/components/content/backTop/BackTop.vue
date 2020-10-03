<template>
  <div class="back_top" @click="backToTop">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  methods: {
    backToTop () {
      this.$emit('backToTop')
    }
  },
};
</script>
<style scoped>
.back_top {
  position: fixed;
  top: 486px;
  right: 8px;
  z-index: 999;
}
.back_top > img {
  width: 42px;
  height: 42px;
}
</style>
