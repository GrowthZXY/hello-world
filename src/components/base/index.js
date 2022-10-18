import uiLoading from './ui-loading';
import word from './word';
export default {
    install(Vue) {
        Vue.component('ui-loading', uiLoading);
        Vue.component('word', word);
    },
};
