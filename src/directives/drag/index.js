import _drag from './_drag';

/**
 * v-drag 指令
 * 实现pc和移动端的拖拽事件
 * 不带参数：
 * v-drag
 *
 * 带一个参数：
 * v-drag="'.xxx'"
 * 参数为对应id（'#app'）或者class（'.app'），用于限制拖动位置，默认自动贴边。
 *
 * 多个参数：
 * v-drag:{selector: '.xxx', autoEdge: false}"，
 * selector：对应id（'#app'）或者class（'.app'），用于限制拖动位置
 * autoEdge：是否自动贴边，默认true
 */

export default {
    // eslint-disable-next-line no-unused-vars
    install: (app, options) => {
        app.directive('drag', _drag); // 注册全局指令
    },
};
