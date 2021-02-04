import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import taiwindStyle from './assets/styles/index.css';

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  taiwindStyle,
  router,
  render: h => h(App),
}).$mount('#app')
