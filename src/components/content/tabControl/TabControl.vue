<template>
  <div class="tabControl">
    <div v-for="(item, index) in titles" :key="index" :class="{active: index === currentIndex}" @click="setTabControl(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    /**
     * 切换tabControl
     */
    setTabControl(index) {
      this.currentIndex = index
    }
  }
};
</script>
<style scoped>
.tabControl{
  display: flex;
  justify-content:space-evenly;
  font-size: 16px;
  background-color:white ;
  position:sticky;
  top: 43px;
  height: 44px;
  line-height: 44px;
  z-index: 9;
}
.active{
  color: var(--color-high-text)
}
.active > span{
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
