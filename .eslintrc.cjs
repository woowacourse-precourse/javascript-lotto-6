module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
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
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
    'import/extensions': ['error', 'ignorePackages'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-new': 'off',
    'import/no-cycle': 'off',
    'no-restricted-globals': 'off',
    'no-sparse-arrays': 'off',
    'default-case': 'off',
  },
};
