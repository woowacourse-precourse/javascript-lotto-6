module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
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
    'import/extensions': 'off',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', { max: 15 }],
  },
};
