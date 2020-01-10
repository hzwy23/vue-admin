import Vue from 'vue'
import App from './App.vue'

import '@/utils/request.js'

// 引入 element ui 框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router';

import router from '@/router/router.js'

import store from '@/store/index.js';

import '@/permission.js';

import '@/mock/mock.js';

Vue.use(ElementUI, {
  size: 'small' // set element-ui default size
});

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
