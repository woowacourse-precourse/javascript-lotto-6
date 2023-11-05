module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'eslint:recommended'],
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
    'max-lines-per-function': ['error', { max: 15 }],
  },
};
