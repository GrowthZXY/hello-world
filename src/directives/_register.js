// import permission from './_permission';

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  true,
  // 指令仅收录index.js
  /index.js$/
);

// 注册全局指令
// directive.forEach(item => {
//     Vue.use(item)
// })
export const registerDirectives = (app) => {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    app.use(componentConfig.default);
  });
};
