module.exports = {
  root: true, ////此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    es6: true,
    node: true, //此项指定环境的全局变量，下面的配置指定为node环境
    browser: true,
  },
  parser: "babel-eslint",
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-alert": 0, // 禁止使用alert等 - 关闭
    "no-multiple-empty-lines": [
      1,
      {
        max: 2,
      },
    ], //空行最多不能超过2行
    indent: "off", // tab 缩进
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: true,
      },
    ],
  },
};
