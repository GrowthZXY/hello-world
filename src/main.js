import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//ui 框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//注册全局组件
//第1种方法
// import uiLoading from '@/components/base/ui-loading';
// Vue.component('ui-loading', uiLoading);
//第2种方法
// import Components from '@/components/base';
// Vue.use(Components);
//第3种方法
import { registerComponents } from '@/components/base/_register';
registerComponents(Vue);

Vue.config.productionTip = false;
import '@/utils/util';

import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
    ak: 'YOUR_APP_KEY',
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
