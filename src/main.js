import App from './App.vue'
import Vue from 'vue'
import router from './router/index'
Vue.prototype.$bus = new Vue(); // 事件总线
new Vue({
    render: h => h(App),
    router
  }).$mount("#app");
