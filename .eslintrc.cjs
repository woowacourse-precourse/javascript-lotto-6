module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 1,
    'no-new': 1,
    'import/extensions': 1,
    'no-restricted-globals': 1,
    'no-useless-constructor': 1,
    'no-empty-function': 1,
    'no-await-in-loop': 1,
    'no-constant-condition': 1,
  },
};
