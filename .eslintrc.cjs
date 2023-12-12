module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
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
    'max-depth': ['error', 2],
    'max-params': ['error', 3],
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'no-new': 'off',
  },
  extends: ['airbnb-base', 'prettier'],
};
