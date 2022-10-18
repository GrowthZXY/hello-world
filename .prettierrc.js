module.exports = {
    quoteProps: 'as-needed',
    vueIndentScriptAndStyle: true,
    semi: true, // 句尾添加分号
    tabWidth: 4, // 缩进字节数
    useTabs: false, // 缩进不使用tab，使用空格
    endOfLine: 'auto', // 结尾是 \n \r auto
    printWidth: 120, // 超过最大字数换行
    singleQuote: true, // 使用单引号代替双引号
    trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    requireConfig: false, // Require a prettierConfig to format prettier
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    arrowParens: 'always', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    // disableLanguages: ["vue"],  // 不格式化vue文件，vue文件的格式化单独设置
    htmlWhitespaceSensitivity: 'ignore',
    tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
    jsxBracketSameLine: false, // 在jsx中把> 是否单独放一行
    // parser: "babylon",              // 格式化的解析器，默认是babylon
    eslintIntegration: true, //让prettier使用eslint的代码格式进行校验
    // stylelintIntegration: true, //让prettier使用stylelint的代码格式进行校验
    ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
};
