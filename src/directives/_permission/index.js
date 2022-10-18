import permission, { checkPermission } from './permission';

export default {
  // eslint-disable-next-line no-unused-vars
  install: (app, options) => {
    app.directive('permission', permission); // 注册全局指令
    app.prototype.$checkPermission = checkPermission; // 挂在到全局，供动态渲染dom调用
  },
};
