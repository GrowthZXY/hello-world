import _loading from './_loading';

/**
 * v-loading 指令
 */
export default {
  // eslint-disable-next-line no-unused-vars
  install: (app, options) => {
    app.directive('loading', _loading); // 注册全局指令
  },
};
