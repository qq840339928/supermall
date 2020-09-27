<template>
  <div id="home">
    <NavBar class="home_navBar">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: "home",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home_navBar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
