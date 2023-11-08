module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
    'max-depth': ['error', 2],
    'no-unused-vars': 'error',
    'no-console': 'error',
    'operator-linebreak': ['error', 'before'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'max-lines-per-function': [
      'error',
      { max: 15, skipBlankLines: true, skipComments: true },
    ],
  },
};
