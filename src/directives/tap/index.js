import _tap from './_tap';

/**
 * v-tap 指令
 * 实现pc和移动端的点击事件
 * 不带参数：v-tap="xxx"
 * 带参数：v-tap:xxx="param"
 * 多个参数：v-tap:xxx="[param1, param2]"
 */
export default {
  // eslint-disable-next-line no-unused-vars
  install: (app, options) => {
    app.directive('tap', _tap); // 注册全局指令
  },
};
