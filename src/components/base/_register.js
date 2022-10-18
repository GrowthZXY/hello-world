import Vue from 'vue';
export const registerComponents = () => {
    // console.log('requireComponents1');
    const requireComponents = require.context(
        // Look for files in the current directory
        './',
        // Do not look in subdirectories
        true,
        // 仅收录vue文件
        /\.vue$/
    );
    requireComponents.keys().forEach((fileName) => {
        const componentConfig = requireComponents(fileName);
        const componentName = fileName
            .match(/\/.*?\//g)[0]
            .replace(/\/|\.\/|_/g, '')
            .split('-')
            .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
            .join('');
        Vue.component(componentName, componentConfig.default || componentConfig);
    });
};
