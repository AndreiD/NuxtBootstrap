module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 'off',
    camelcase: 'off',
    indent: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
